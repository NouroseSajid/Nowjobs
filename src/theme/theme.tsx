import { Appearance, StyleSheet } from 'react-native';
import React, { createContext, useContext, useState, useEffect } from 'react';

export const COLOR_SCHEMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ColorScheme = typeof COLOR_SCHEMES[keyof typeof COLOR_SCHEMES];

// Primary brand colors
const BRAND_PRIMARY = '#DE004D'; // Vibrant red accent
const BRAND_SECONDARY = '#211547'; // Deep purple/navy

// Enhanced color palette
export const COLORS = {
  light: {
    // Core colors
    primary: BRAND_PRIMARY,
    secondary: BRAND_SECONDARY,
    background: '#F9FAFC',
    surface: '#FFFFFF',
    error: '#E74C3C',
    
    // Text & borders
    textPrimary: '#1E293B',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    shadow: '#1E293B',
    
    // Specials
    accent: BRAND_PRIMARY,
    success: '#10B981',
    warning: '#F59E0B',
    info: '#3B82F6',
    
    // Navigation
    tabActive: BRAND_PRIMARY,
    tabInactive: '#94A3B8',
    headerBg: '#FFFFFF',
    
    // Gradient options
    gradientStart: '#FFFFFF',
    gradientEnd: '#F1F5F9',
  },
  dark: {
    // Core colors
    primary: BRAND_PRIMARY,
    secondary: '#6366F1',
    background: '#0F172A',
    surface: '#1E293B',
    error: '#EF4444',
    
    // Text & borders
    textPrimary: '#F8FAFC',
    textSecondary: '#CBD5E0',
    border: '#334155',
    shadow: '#000000',
    
    // Specials
    accent: BRAND_PRIMARY,
    success: '#10B981',
    warning: '#F59E0B',
    info: '#3B82F6',
    
    // Navigation
    tabActive: BRAND_PRIMARY,
    tabInactive: '#64748B',
    headerBg: '#1E293B',
    
    // Gradient options
    gradientStart: '#0F172A',
    gradientEnd: BRAND_SECONDARY,
  },
};

type ThemeContextType = {
  isDark: boolean;
  colors: typeof COLORS.light;
  setScheme: (scheme: ColorScheme) => void;
  useGradient: boolean;
  toggleGradient: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  colors: COLORS.light,
  setScheme: () => {},
  useGradient: false,
  toggleGradient: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with device preference
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    Appearance.getColorScheme() || COLOR_SCHEMES.LIGHT
  );
  
  // Gradient toggle state
  const [useGradient, setUseGradient] = useState(false);
  
  // Listen for system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme: newColorScheme }) => {
      if (newColorScheme) {
        setColorScheme(newColorScheme as ColorScheme);
      }
    });
    
    return () => {
      subscription.remove();
    };
  }, []);

  const setScheme = (scheme: ColorScheme) => {
    setColorScheme(scheme);
  };
  
  const toggleGradient = () => {
    setUseGradient(prev => !prev);
  };

  const isDark = colorScheme === COLOR_SCHEMES.DARK;
  const colors = isDark ? COLORS.dark : COLORS.light;

  return (
    <ThemeContext.Provider value={{ isDark, colors, setScheme, useGradient, toggleGradient }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for easy theme access
export const useTheme = () => useContext(ThemeContext);

// Utility function to get responsive sizes
export const getResponsiveSize = (size: number, screenDimension: number) => {
  return screenDimension * (size / 100);
};