import { Platform } from 'react-native';
import i18next from 'i18next';

// Import all screen components
import HomeScreen from '../screens/bottom-five-screens/home-screen';
import ProfileScreen from '../screens/profile-screen/index';
import SettingsScreen from '../screens/settings-screen/index';
import BackupJobs from '../screens/backup-jobs-screen';
import VacanciesScreen from '../screens/bottom-five-screens/vacancies-screen';
import ApplicationScreen from '../screens/bottom-five-screens/application-screen';
import ChatScreen from '../screens/bottom-five-screens/chat-screen';
import PlanningScreen from '../screens/bottom-five-screens/planning-screen';
import LoginScreen from '../screens/login-screen/LoginScreen';


import StackNavigator from '../navigation/stack-navigator/index';

import ProtectedScreen from '../../compoments/global-components/ProtectedScreen';


// Define constants
const ICON_SIZE = 24;
const ICON_STROKE_WIDTH = 2;
const ICON_SECONDARY_STROKE_WIDTH = 2;
const ICON_SECONDARY_WIDTH = 20;
const ICON_SECONDARY_HEIGHT = 20;

const TAB_BAR_HEIGHT_IOS = 90;
const TAB_BAR_HEIGHT_ANDROID = 70;
const TAB_BAR_PADDING_BOTTOM_IOS = 30;
const TAB_BAR_PADDING_BOTTOM_ANDROID = 10;
const HEADER_HEIGHT_IOS = 44;
const HEADER_HEIGHT_ANDROID = 56;

export const NAVIGATION_CONFIG = {
  headerTitleAlign: 'center',
  defaultHeaderShown: true,
};

export const HEADER_CONFIG = {
  height: Platform.select({
    ios: HEADER_HEIGHT_IOS,
    android: HEADER_HEIGHT_ANDROID,
  }),
  ...NAVIGATION_CONFIG,
};

export const TAB_BAR_CONFIG = {
  iconSize: ICON_SIZE,
  height: Platform.select({
    ios: TAB_BAR_HEIGHT_IOS,
    android: TAB_BAR_HEIGHT_ANDROID,
  }),
  paddingBottom: Platform.select({
    ios: TAB_BAR_PADDING_BOTTOM_IOS,
    android: TAB_BAR_PADDING_BOTTOM_ANDROID,
  }),
  strokeWidth: ICON_STROKE_WIDTH,
  secondaryStrokeWidth: ICON_SECONDARY_STROKE_WIDTH,
  secondaryWidth: ICON_SECONDARY_WIDTH,
  secondaryHeight: ICON_SECONDARY_HEIGHT,
};

export const STACK_SCREENS = [
  { 
    name: 'Home',
    component: HomeScreen,
    translationKey: 'home',
    options: { headerShown: false }
  },
  { 
    name: 'Profile',
    component: (props: any) => (
      <ProtectedScreen>
        <ProfileScreen {...props} />
      </ProtectedScreen>
    ),
    translationKey: 'profile',
  },
  { 
    name: 'backupJobs',
    component: BackupJobs,
    translationKey: 'backupJobs',
  },
  { 
    name: 'Profile',
    component: ProfileScreen,
    translationKey: 'profile',
  },
  { 
    name: 'Settings',
    component: SettingsScreen,
    translationKey: 'settings',
  },
  
];

export const TAB_SCREENS = [
  { 
    name: 'Home',
    component: StackNavigator,
    translationKey: 'home',
    showHeader: false,
    requiresAuth: false // Public screen
  },
  { 
    name: 'Vacancies',
    component: VacanciesScreen,
    translationKey: 'vacancies',
    requiresAuth: true
  },
  { 
    name: 'Application',
    component: ApplicationScreen,
    translationKey: 'application',
    requiresAuth: true
  },
  { 
    name: 'Planning',
    component: PlanningScreen,
    translationKey: 'planning',
    requiresAuth: true
  },
  { 
    name: 'Chat',
    component: ChatScreen,
    translationKey: 'chat',
    requiresAuth: true
  },
];
