import React, { useState } from 'react';
import { View, Alert, Button } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { AuthForm } from '../../compoments/global-components/AuthForm';
import { useTheme } from '../../theme/theme';
import { useTranslation } from 'react-i18next';

const LoginScreen = () => {
  // Added state declarations with troubleshooting values
  const [email, setEmail] = useState('john@example.com');
  const [password, setPassword] = useState('Password123');

  const { login } = useAuth();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const health = 'http://192.168.1.22:3000/health';  

  const fetchHealthStatus = async () => {
    try {
      const response = await fetch(health);
      
      const data = await response.json();
      return data;
    } catch (err) {
      return null;
    }
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
      // If successful, navigation will be handled by auth context
    } catch (error) {
      Alert.alert(
        'Login Error', 
        error.message || 'An unknown error occurred'
      );
    }
  };

  // New function for direct login that displays the token from the API.
  const handleDirectLogin = async () => {
    try {
      const loginUrl = 'http://192.168.1.22:3000/api/users/login';
      // Fixed loginBody using key-value pairs
      const loginBody = { email: 'john@example.com', password: 'Password123' };
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginBody)
      });
      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        throw new Error('JSON parse error: ' + err.message + ' - Response: ' + text);
      }
      if (data.token) {
        Alert.alert('Login Token', data.token);
      } else {
        Alert.alert('Login Failed', 'No token received');
      }
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      padding: 20, 
      backgroundColor: colors.background 
    }}>
      <AuthForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmit={handleLogin}
      />
      <Button
        title="Direct Login"
        onPress={handleDirectLogin}
      />
    </View>
  );
};

export default LoginScreen;