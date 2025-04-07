import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme/theme';
import Button from '../ui/Button'; 
import useGlobalStyles from '../../global_styles/GlobalStyles'; // Adjust the path as needed

type AuthFormProps = {
  email: string;
  password: string;
  setEmail: (text: string) => void;
  setPassword: (text: string) => void;
  onSubmit: () => void;
  loading?: boolean; // Added loading prop
};

export const AuthForm = ({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  loading = false, 
}: AuthFormProps) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const G = useGlobalStyles();

  return (
    <View style={G.fullWidth}>
      <View style={G.inputContainer}>
        <Text style={{ color: colors.textPrimary, marginBottom: 8 }}>
          {t('auth.email')}:
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            color: colors.textPrimary,
            padding: 12,
            borderRadius: 8,
          }}
          value={email}
          onChangeText={setEmail}
          placeholder={t('auth.enterEmail')}
          placeholderTextColor={colors.textSecondary}
          autoCapitalize="none"
        />
      </View>

      <View style={G.inputContainer}>
        <Text style={{ color: colors.textPrimary, marginBottom: 8 }}>
          {t('auth.password')}:
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.surface,
            color: colors.textPrimary,
            padding: 12,
            borderRadius: 8,
          }}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder={t('auth.enterPassword')}
          placeholderTextColor={colors.textSecondary}
        />
      </View>

      <Button
        onPress={onSubmit}
        mode="contained"
        loading={loading}
        style={G.fullWidth}
      >
        {t('auth.login')}
      </Button>
    </View>
  );
};