import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VacanciesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vacancies Screen</Text>
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
