import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useTheme } from '../../../theme/theme';
import { useAuth } from '../../../context/AuthContext';
import i18next from 'i18next';
import TodosList from './components/TodosList';

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { user, isLoading } = useAuth();

  const [todos, setTodos] = useState([
    { id: 1, title: 'Specify your availability', subtitle: 'NOWJOBS is asking for your availability' },
    { id: 2, title: 'Backup jobs (6)', subtitle: 'First job is on 25/02' },
  ]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles(colors).container}>
      <TodosList todos={todos} navigation={navigation} />
      
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles(colors).todoItem}>
            {/* Todo item content */}
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
    </View>
  );
};

const styles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  todoItem: {
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 10,
  },
});

export default HomeScreen;