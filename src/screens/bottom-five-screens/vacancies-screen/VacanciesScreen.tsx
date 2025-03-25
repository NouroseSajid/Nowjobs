
import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../../context/AuthContext';

const VacanciesScreen = () => {
  const { user } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Vacancies Screen</Text>
      <Text style={{ fontSize: 18 }}>{user?.name || 'Loading...'}</Text>
    </View>
  );
};

export default VacanciesScreen;