import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { View, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme/theme';
import { TAB_BAR_CONFIG, HEADER_CONFIG, TAB_SCREENS } from '../navigation-constants';
import { IconProps } from '../../types/global';
import { ApplicationIcon, HomeIcon, VacanciesIcon, ChatIcon, PlanningIcon } from '../../assets/icons/bottom-tab-navigator-icons';

const Tab = createBottomTabNavigator();
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ICON_COMPONENTS = {
  Home: HomeIcon,
  Vacancies: VacanciesIcon,
  Application: ApplicationIcon,
  Chat: ChatIcon,
  Planning: PlanningIcon,
};

const BottomTabNavigation: React.FC = () => {
  const { colors, isDark } = useTheme();
  const { t } = useTranslation();
  const { user } = useAuth();

  const filteredScreens = TAB_SCREENS.filter(screen => 
    !screen.requiresAuth || (screen.requiresAuth && user)
  );

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const IconComponent = ICON_COMPONENTS[route.name] || HomeIcon;
            return <IconComponent focused={focused} />;
          },
          tabBarActiveTintColor: colors.tabActive,
          tabBarInactiveTintColor: colors.tabInactive,
          tabBarStyle: {
            backgroundColor: colors.surface,
            height: TAB_BAR_CONFIG.height,
            paddingBottom: TAB_BAR_CONFIG.paddingBottom,
            borderTopColor: colors.border,
            borderTopWidth: 1,
            elevation: isDark ? 8 : 4,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          },
          headerStyle: {
            backgroundColor: colors.headerBg,
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
            height: HEADER_CONFIG.height,
            elevation: isDark ? 8 : 4,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          },
          headerTitleStyle: {
            color: colors.textPrimary,
            fontSize: SCREEN_WIDTH * 0.045,
            fontWeight: '600',
          },
        })}
      >
        {filteredScreens.map(screen => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              title: t(screen.translationKey, { defaultValue: screen.name }),
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