// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as authService from '../api/authService';

type User = {
  name: string;
  type: string;
} | null;

type AuthContextType = {
  user: User;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;
      
      const userData = await authService.fetchUser(token);
      setUser(userData);
    } catch (error) {
      await authService.logout();
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    const token = await authService.login(email, password);
    const userData = await authService.fetchUser(token);
    setUser(userData);
  };

  const handleLogout = async () => {
    await authService.logout();
    setUser(null);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);