 // \src\screens\login-screen\LoginScreen.tsx

import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import { AuthForm } from '../../compoments/global-components/AuthForm';
import { useTheme } from '../../theme/theme';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, isLoading, login } = useAuth();
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate('Home'); // Redirect to homepage after login
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: colors.background }}>
      <AuthForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmit={handleLogin}
      />
    </View>
  );
};

export default LoginScreen;