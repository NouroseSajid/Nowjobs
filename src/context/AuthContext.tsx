import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchUser } from '../api/authService';
import { performLogout, performLogin } from '../utils/AuthHelpers';

type User = {
  id: string;
  email: string;
  name: string;
  // Add other user properties as needed
  // For example:
} | null;

type AuthContextType = {
  user: User;
  isLoading: boolean;
  setUser: (user: User) => void;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<any>; // new login function
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  setUser: () => {},
  checkAuth: async () => {},
  logout: async () => {},
  login: async () => {} // new login default
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem('token');
      
      if (token) {
        const userData = await fetchUser(token);
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Authentication check failed:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await performLogout(setUser);
    } catch (error) {
      console.error('Logout in context failed:', error);
    }
  };

  // new login function using performLogin
  const login = async (email: string, password: string) => {
    return await performLogin(email, password, setUser);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, setUser, checkAuth, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);