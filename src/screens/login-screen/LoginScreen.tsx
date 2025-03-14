import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { AuthForm } from '../../compoments/global-components/AuthForm';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, isLoading, login, logout } = useAuth();

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      {user ? (
        <View>
          <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 20 }}>
            Welcome, {user.name}
            type: {user.type}
          </Text>
          <Button title="Logout" onPress={logout} />
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