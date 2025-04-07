// src/api/authService.tsx
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { withTimeout } from '../utils/timeout';

const API_URL = process.env.API_URL || 'http://192.168.0.100:3000'; // fallback default using local IP
const LOGIN_URL = process.env.LOGIN_URL || 'http://192.168.0.100:3000/login'; // fallback default using local IP
const API_TIMEOUT = 60000; // 60 seconds
const SERVER_CHECK_TIMEOUT = 3000; // 3 seconds for server status check

// Add a helper sleep function for delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Server health check utility
const checkServerStatus = async (): Promise<boolean> => {
  // Wait for 2 seconds before checking server status
  await sleep(2000);
  try {
    await withTimeout(
      axios.head(`${API_URL}/health`), // Using HEAD request for efficiency
      SERVER_CHECK_TIMEOUT
    );
    return true;
  } catch (error) {
    return false;
  }
};

export const login = async (email: string, password: string): Promise<string> => {
  try {
    // First check server availability
    const isServerLive = await checkServerStatus();
    if (!isServerLive) {
      throw new Error('server_unreachable');
    }

    // Use the new LOGIN_URL from .env for the login endpoint.
    const response = await withTimeout(
      axios.post(`${LOGIN_URL}`, { email, password }),
      API_TIMEOUT
    );

    await AsyncStorage.setItem('token', response.data.token);
    return response.data.token;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    // Handle different error scenarios
    if (errorMessage.includes('timed out')) {
      throw new Error('server_timeout');
    }
    if (errorMessage.includes('server_unreachable')) {
      throw new Error('server_unreachable');
    }
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'login_failed');
    }
    throw new Error('login_failed');
  }
};

export const fetchUser = async (token: string): Promise<User> => {
  try {
    const response = await withTimeout(
      axios.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
      API_TIMEOUT
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error && error.message.includes('timed out')) {
      throw new Error('server_timeout');
    }
    throw new Error('failed_to_fetch_user');
  }
};

export const logout = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    throw new Error('logout_failed');
  }
};