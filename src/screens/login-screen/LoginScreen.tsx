import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Alert, Button } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { AuthForm } from '../../compoments/global-components/AuthForm';
import { useTheme } from '../../theme/theme';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, isLoading, login, logout } = useAuth();
  const { colors } = useTheme();

  const handleLogin = async () => {
    try {
      await login(email, password);
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
      {user ? (
        <View>
          <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 20, color: colors.textPrimary }}>
            Welcome, {user.name}
            
          </Text>
          <Button title="Logout" onPress={logout} color={colors.primary} />
        </View>
      ) : (
        <AuthForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onSubmit={handleLogin}
        />
      )}
    </View>
  );
};

export default LoginScreen;