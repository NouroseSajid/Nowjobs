import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../../context/AuthContext';

const { user} = useAuth();

const VacanciesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vacancies Screen</Text>
      <Text style={styles.text}>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default VacanciesScreen;
