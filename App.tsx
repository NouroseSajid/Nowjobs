import React from 'react';
import { SafeAreaView } from 'react-native';
import './src/i18n';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/theme/theme';
import { AuthProvider } from './src/context/AuthContext';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import CustomStatusBar from './src/compoments/global-components/CustomStatusBar';
import CheckForToken from './src/compoments/global-components/CheckForToken';

const App: React.FC = () => {
  return (
    <>
      <CustomStatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider>
          <AuthProvider>
            <NavigationContainer>
              <CheckForToken>
                <BottomTabNavigator />
              </CheckForToken>
            </NavigationContainer>
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

export default App;