import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from '../../theme/theme'; 

const CustomStatusBar: React.FC = () => {
  const theme = useTheme(); 

  return (
    <StatusBar
      barStyle={theme.isDark ? 'light-content' : 'dark-content'}
      backgroundColor={theme.colors.background}
      translucent={false}
    />
  );
};

export default CustomStatusBar;
