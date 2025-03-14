import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const ProtectedScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (!isLoading && !user) {
      navigation.navigate('LoginScreen');
    }
  }, [user, isLoading, navigation]);

  if (isLoading || !user) {
    return null; // Or loading spinner
  }

  return <>{children}</>;
};

export default ProtectedScreen;