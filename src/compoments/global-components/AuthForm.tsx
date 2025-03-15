import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme/theme';

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
}: AuthFormProps) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  
  return (
    <View>
      <Text style={{ color: colors.textPrimary, marginBottom: 10 }}>{t('auth.email')}:</Text>
      <TextInput
        style={{ 
          borderWidth: 1, 
          borderColor: colors.border,
          backgroundColor: colors.surface,
          color: colors.textPrimary,
          marginBottom: 10, 
          padding: 8 
        }}
        value={email}
        onChangeText={setEmail}
        placeholder={t('auth.enterEmail')}
        placeholderTextColor={colors.textSecondary}
        autoCapitalize="none"
      />
      <Text style={{ color: colors.textPrimary }}>{t('auth.password')}:</Text>
      <TextInput
        style={{ 
          borderWidth: 1, 
          borderColor: colors.border,
          backgroundColor: colors.surface,
          color: colors.textPrimary,
          marginBottom: 10, 
          padding: 8 
        }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder={t('auth.enterPassword')}
        placeholderTextColor={colors.textSecondary}
      />
      <Button title={t('auth.login')} onPress={onSubmit} color={colors.primary} />
    </View>
  );
};