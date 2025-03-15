import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, fetchUser, logout } from '../api/authService';

/**
 * Checks if user has a valid authentication token
 * @returns Promise resolving to boolean indicating if token exists
 */
export const hasValidToken = async (): Promise<boolean> => {
  try {
    const token = await AsyncStorage.getItem('token');
    return !!token;
  } catch (error) {
    console.error('Error checking token:', error);
    return false;
  }
};

/**
 * Performs login and stores user data in context
 * @param email User email
 * @param password User password
 * @param setUser Function to update user in context
 * @returns Promise resolving to the logged in user or error
 */
export const performLogin = async (
  email: string, 
  password: string, 
  setUser: (user: any) => void
): Promise<any> => {
  try {
    const token = await login(email, password);
    const userData = await fetchUser(token);
    setUser(userData);
    return userData;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

/**
 * Performs logout and clears user data
 * @param setUser Function to clear user in context
 */
export const performLogout = async (setUser: (user: null) => void): Promise<void> => {
  try {
    await logout();
    setUser(null);
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};