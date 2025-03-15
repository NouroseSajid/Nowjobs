import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../theme/theme';

const CheckForToken: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading, checkAuth } = useAuth();
  const navigation = useNavigation();
  const { colors } = useTheme();

  useEffect(() => {
    // Check for token on component mount
    const verifyToken = async () => {
      await checkAuth();
    };

    verifyToken();
  }, []);

  useEffect(() => {
    // Redirect based on authentication status
    if (!isLoading) {
      if (!user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        });
      }
    }
  }, [user, isLoading, navigation]);

  if (isLoading) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CheckForToken;