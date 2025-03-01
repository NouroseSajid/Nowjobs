// stack-navigator.jsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { STACK_SCREENS, HEADER_CONFIG } from '../navigation-constants';
import i18next from 'i18next';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={STACK_SCREENS[0].name}
      screenOptions={{
        headerStyle: { height: HEADER_CONFIG.height },
        headerTitleAlign: HEADER_CONFIG.headerTitleAlign,
        headerShown: HEADER_CONFIG.defaultHeaderShown,
      }}
    >
      {STACK_SCREENS.map(({ name, component, translationKey, options = {} }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: i18next.t(translationKey, { defaultValue: name }),
            ...options,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default StackNavigator;