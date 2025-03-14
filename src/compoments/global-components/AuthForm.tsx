import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

type AuthFormProps = {
  email: string;
  password: string;
  setEmail: (text: string) => void;
  setPassword: (text: string) => void;
  onSubmit: () => void;
};

export const AuthForm = ({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
}: AuthFormProps) => (
  <View>
    <Text style={{ color: 'red', marginBottom: 10 }}>Username:</Text>
    <TextInput
      style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      value={email}
      onChangeText={setEmail}
      placeholder="Enter email"
      autoCapitalize="none"
    />
    <Text>Password:</Text>
    <TextInput
      style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      placeholder="Enter password"
    />
    <Button title="Login" onPress={onSubmit} />
  </View>
);