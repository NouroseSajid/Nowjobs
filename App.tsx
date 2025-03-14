import React from 'react';
import { SafeAreaView } from 'react-native';
import './src/i18n';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/theme/theme';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import CustomStatusBar from './src/compoments/global-components/CustomStatusBar';

const App: React.FC = () => {
  return (
    <>
      <CustomStatusBar />
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
