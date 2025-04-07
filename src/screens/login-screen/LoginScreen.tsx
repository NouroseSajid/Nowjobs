import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { AuthForm } from '../../compoments/global-components/AuthForm';
import { useTheme } from '../../theme/theme';
import { useTranslation } from 'react-i18next';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, handleServerError } = useAuth();
  const { colors } = useTheme();
  const { t } = useTranslation();

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      switch(error.message) {
        case 'server_unreachable':
          handleServerError(error);
          break;
        case 'server_timeout':
          Alert.alert(t('errors.server_timeout'), t('errors.try_again_later'));
          break;
        case 'login_failed':
          Alert.alert(t('auth.loginFailed'), t('auth.invalidCredentials'));
          break;
        default:
          Alert.alert(t('errors.genericError'));
      }
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
    </View>
  );
};

export default LoginScreen;