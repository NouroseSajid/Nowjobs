import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';
import i18next from 'i18next';
import TodosList from './components/TodosList';
import { useTheme } from '../../../theme/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const changeLanguage = async (lng) => {
    await i18next.changeLanguage(lng);
    await AsyncStorage.setItem('user-language', lng);
  };

  const [todos, setTodos] = useState([
    { id: 1, title: 'Specify your availability', subtitle: 'NOWJOBS is asking for your availability' },
    { id: 2, title: 'Backup jobs (6)', subtitle: 'First job is on 25/02' },
  ]);

  return (
    <View style={styles(colors).container}>
      <TodosList todos={todos} navigation={navigation} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles(colors).todoItem}>
          </View>
        )}
      />

      <View style={styles(colors).buttonContainer}>
        <Button
          title={i18next.t('profile', { defaultValue: 'Profile' }) || 'Profile'}
          onPress={() => navigation.navigate('Profile')}
          color={colors.primary}
        />
      </View>
      <View style={styles(colors).buttonContainer}>
        <Button
          title={i18next.t('settings', { defaultValue: 'Settings' }) || 'Settings'}
          onPress={() => navigation.navigate('Settings')}
          color={colors.primary}
        />
      </View>
      <View style={styles(colors).buttonContainer}>
        <Button
          title={i18next.t('LoginScreen', { defaultValue: 'LoginScreen' }) || 'LoginInScreen'}
          onPress={() => navigation.navigate('LoginScreen')}
          color={colors.primary}
        />
      </View>
    </View>
  );
};

const styles = (colors: any) => StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    borderRadius: 10,
    backgroundColor: colors.background,
  },
  todoItem: {
    flex: 1,
    padding: 10,
    // Style for individual todo item if needed
  },
  buttonContainer: {
    margin: 10,
  },
});

export default HomeScreen;
