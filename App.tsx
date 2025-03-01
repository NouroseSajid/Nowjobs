import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import './src/i18n';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/theme';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
        translucent={false}

      />
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider>
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};
export default App;
