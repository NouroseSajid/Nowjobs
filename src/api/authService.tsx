import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = "http://192.168.0.110:3000";

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  await AsyncStorage.setItem("token", response.data.token);
  return response.data.token;
};

export const fetchUser = async (token: string) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const logout = async () => {
  await AsyncStorage.removeItem("token");
};