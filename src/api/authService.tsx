// src/api/authService.tsx
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define constants for API URLs and timeouts
const API_BASE_URL = 'http://192.168.1.22:3000'; // Base URL for all endpoints
const API_TIMEOUT = 15000; // 15 seconds (more reasonable than 60)

// Create a configured axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

/**
 * Utility to add timeout to any promise
 */
const withTimeout = async <T,>(promise: Promise<T>, ms: number): Promise<T> => {
  const timeout = new Promise<T>((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request timed out'));
    }, ms);
  });

  return Promise.race([promise, timeout]);
};

/**
 * Authenticate user with email and password
 */
export const login = async (email: string, password: string): Promise<string> => {
  try {
    console.log('Attempting login...');
    
    const response = await withTimeout(
      api.post('/api/users/login', { email, password }),
      API_TIMEOUT
    );

    if (!response.data?.token) {
      throw new Error('No token received in response');
    }

    await AsyncStorage.setItem('token', response.data.token);
    console.log('Login successful, token stored');
    return response.data.token;
  } catch (error) {
    console.error('Login error:', error);
    
    // Handle specific error cases
    if (error.message === 'Request timed out') {
      throw new Error('server_timeout');
    }
    
    if (axios.isAxiosError(error)) {
      const serverMessage = error.response?.data?.message;
      if (serverMessage) {
        throw new Error(serverMessage);
      }
      
      if (error.response?.status === 401) {
        throw new Error('Invalid email or password');
      }
      
      if (error.code === 'ECONNABORTED') {
        throw new Error('server_timeout');
      }
    }
    
    throw new Error('login_failed');
  }
};

/**
 * Fetch authenticated user data
 */
export const fetchUser = async (token: string): Promise<any> => {
  try {
    console.log('Fetching user data...');
    
    const response = await withTimeout(
      api.get('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` }
      }),
      API_TIMEOUT
    );

    if (!response.data) {
      throw new Error('No user data received');
    }

    console.log('User data fetched successfully');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    
    if (error.message === 'Request timed out') {
      throw new Error('server_timeout');
    }
    
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      // Token is invalid, clear it
      await AsyncStorage.removeItem('token');
      throw new Error('session_expired');
    }
    
    throw new Error('failed_to_fetch_user');
  }
};

/**
 * Log out the current user
 */
export const logout = async (): Promise<void> => {
  try {
    console.log('Logging out user...');
    await AsyncStorage.removeItem('token');
    console.log('User logged out successfully');
  } catch (error) {
    console.error('Failed to logout:', error);
    // Even if storage fails, we'll consider it a successful logout
  }
};

/**
 * Check if there's an active session
 */
export const checkSession = async (): Promise<boolean> => {
  try {
    const token = await AsyncStorage.getItem('token');
    return !!token;
  } catch (error) {
    console.error('Error checking session:', error);
    return false;
  }
};