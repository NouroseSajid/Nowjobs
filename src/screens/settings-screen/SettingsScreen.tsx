import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme/theme';
import { Button, Card, Switch } from '../../compoments/ui';
import { changeLanguage, getCurrentLanguage, SupportedLanguage } from '../../i18n';
import { COLOR_SCHEMES } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface LanguageButtonProps {
  language: SupportedLanguage;
  currentLang: SupportedLanguage;
  onPress: (lang: SupportedLanguage) => void;
}

const SettingsScreen: React.FC = () => {
  const { t } = useTranslation();
  const { colors, isDark, setScheme, useGradient, toggleGradient } = useTheme();
  const { logout } = useAuth();
  const navigation = useNavigation();
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(
    getCurrentLanguage() as SupportedLanguage
  );
  const [changingLang, setChangingLang] = useState(false);

  const handleLanguageChange = useCallback(async (lng: SupportedLanguage) => {
    try {
      setChangingLang(true);
      await changeLanguage(lng);
      setCurrentLang(lng);
    } finally {
      setChangingLang(false);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    await logout();
    navigation.navigate('LoginScreen');
  }, [logout, navigation]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Card style={styles.sectionCard}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
          {t('settingsScreen.appearance')}
        </Text>

        <View style={styles.optionRow}>
          <Text style={[styles.optionLabel, { color: colors.textPrimary }]}>
            {t('settingsScreen.darkMode')}
          </Text>
          <CustomSwitch
            value={isDark}
            onValueChange={(value) => setScheme(value ? COLOR_SCHEMES.DARK : COLOR_SCHEMES.LIGHT)}
          />
        </View>

        <View style={styles.optionRow}>
          <Text style={[styles.optionLabel, { color: colors.textPrimary }]}>
            {t('settingsScreen.useGradient')}
          </Text>
          <CustomSwitch value={useGradient} onValueChange={toggleGradient} />
        </View>
      </Card>

      <Card style={styles.sectionCard}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
          {t('settingsScreen.language')}
        </Text>

        <View style={styles.languageContainer}>
          <LanguageButton
            language="en"
            currentLang={currentLang}
            onPress={handleLanguageChange}
            disabled={changingLang}
          />
          <LanguageButton
            language="fr"
            currentLang={currentLang}
            onPress={handleLanguageChange}
            disabled={changingLang}
          />
          <LanguageButton
            language="nl"
            currentLang={currentLang}
            onPress={handleLanguageChange}
            disabled={changingLang}
          />
        </View>
      </Card>

      <Card style={styles.sectionCard}>
        <Button
          mode="contained"
          onPress={handleLogout}
          style={styles.logoutButton}
          textStyle={styles.logoutText}
          destructive
        >
          {t('auth.logout')}
        </Button>
      </Card>
    </View>
  );
};

const LanguageButton: React.FC<LanguageButtonProps & { disabled?: boolean }> = ({
  language,
  currentLang,
  onPress,
  disabled,
}) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const isActive = language === currentLang;

  return (
    <Button
      mode={isActive ? 'contained' : 'outlined'}
      onPress={() => onPress(language)}
      style={styles.languageButton}
      disabled={disabled}
      accessibilityLabel={`Select ${t(`settingsScreen.${language}`)} language`}
    >
      {t(`settingsScreen.${language}`)}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_WIDTH * 0.05,
  },
  sectionCard: {
    marginBottom: SCREEN_HEIGHT * 0.025,
    padding: SCREEN_WIDTH * 0.04,
  },
  sectionTitle: {
    fontSize: SCREEN_WIDTH * 0.045,
    fontWeight: '700',
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SCREEN_HEIGHT * 0.015,
  },
  optionLabel: {
    fontSize: SCREEN_WIDTH * 0.04,
    flex: 1,
    marginRight: 16,
  },
  languageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SCREEN_WIDTH * 0.03,
    marginTop: SCREEN_HEIGHT * 0.01,
  },
  languageButton: {
    minWidth: SCREEN_WIDTH * 0.25,
  },
  logoutButton: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  logoutText: {
    color: '#E53E3E', // Using direct color for destructive actions
    fontWeight: '600',
  },
});

export default SettingsScreen;