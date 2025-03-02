import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { STACK_SCREENS, HEADER_CONFIG } from '../navigation-constants';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme/theme';
import { LinearGradient } from 'react-native-linear-gradient';

const Stack = createStackNavigator();
const { width: SCREEN_WIDTH } = Dimensions.get('window');

function StackNavigator() {
  const { t } = useTranslation();
  const { colors, isDark, useGradient } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName={STACK_SCREENS[0].name}
      screenOptions={{
        headerStyle: { 
          height: HEADER_CONFIG.height,
          backgroundColor: colors.headerBg,
          borderBottomColor: colors.border,
          borderBottomWidth: 1,
          elevation: isDark ? 8 : 4,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        headerTitleAlign: HEADER_CONFIG.headerTitleAlign,
        headerShown: HEADER_CONFIG.defaultHeaderShown,
        headerTitleStyle: {
          color: colors.textPrimary,
          fontSize: SCREEN_WIDTH * 0.045, // Responsive font size
          fontWeight: '600',
        },
        headerBackground: useGradient 
          ? () => (
              <LinearGradient
                colors={[colors.gradientStart, colors.gradientEnd]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            )
          : undefined
      }}
    >
      {STACK_SCREENS.map(({ name, component, translationKey, options = {} }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: t(translationKey, { defaultValue: name }),
            ...options,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default StackNavigator;