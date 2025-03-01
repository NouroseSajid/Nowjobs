import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import i18next from 'i18next';
import { useTheme } from '../../theme/theme';
import { TAB_BAR_CONFIG, HEADER_CONFIG, TAB_SCREENS } from '../navigation-constants'; // Update import to use JS version
import { IconProps } from '../../types/global'; // Import IconProps from global.d.ts

// Import your icon components
import { ApplicationIcon, HomeIcon, VacanciesIcon, ChatIcon, PlanningIcon } from '../../assets/icons/bottom-tab-navigator-icons';

type BottomTabParamList = {
  Home: undefined;
  Vacancies: undefined;
  Application: undefined;
  Chat: undefined;
  Planning: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const ICON_COMPONENTS = {
  Home: HomeIcon,
  Vacancies: VacanciesIcon,
  Application: ApplicationIcon,
  Chat: ChatIcon,
  Planning: PlanningIcon,
};

const BottomTabNavigation: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }: IconProps) => {
            const IconComponent = ICON_COMPONENTS[route.name] || HomeIcon;
            return (
              <IconComponent />
            );
          },
          tabBarActiveTintColor: colors.tabActive,
          tabBarInactiveTintColor: colors.tabInactive,
          tabBarStyle: {
            backgroundColor: colors.surface,
            height: TAB_BAR_CONFIG.height,
            paddingBottom: TAB_BAR_CONFIG.paddingBottom,
            borderTopColor: colors.border,
          },
          headerStyle: {
            backgroundColor: colors.headerBg,
            borderBottomColor: colors.border,
            height: HEADER_CONFIG.height,
          },
          headerTitleStyle: {
            color: colors.textPrimary,
          },
        })}
      >
        {TAB_SCREENS.map(screen => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              title: i18next.t(screen.translationKey, { defaultValue: screen.name }),
              headerShown: screen.showHeader,
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BottomTabNavigation;