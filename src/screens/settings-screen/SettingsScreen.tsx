import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme, COLOR_SCHEMES } from '../../theme/theme';
import { changeLanguage, getCurrentLanguage, SupportedLanguage } from '../../i18n';

const SettingsScreen: React.FC = () => {
    const { colors, isDark, setScheme } = useTheme();
    const { t } = useTranslation();
    const [currentLang, setCurrentLang] = useState<SupportedLanguage>(getCurrentLanguage() as SupportedLanguage);
    
    const styles = dynamicStyles(colors);

    // Handle language change
    const handleLanguageChange = async (lng: SupportedLanguage) => {
        await changeLanguage(lng);
        setCurrentLang(lng);
    };

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Switch
                    value={isDark}
                    onValueChange={(value) => {
                        setScheme(value ? COLOR_SCHEMES.DARK : COLOR_SCHEMES.LIGHT);
                    }}
                />
                <Text style={styles.switchLabel}>
                    {isDark ? t('settingsScreen.darkMode') : t('settingsScreen.lightMode')}
                </Text>
            </View>
            
            <Text style={styles.headerText}>{t('settingsScreen.settings')}</Text>
            
            <View style={styles.languageContainer}>
                <Text style={styles.languageTitle}>{t('settings')}</Text>
                
                <View style={styles.buttonContainer}>
                    <Button
                        title={t('settingsScreen.english')}
                        onPress={() => handleLanguageChange('en')}
                        color={currentLang === 'en' ? colors.accent : colors.primary}
                    />
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button
                        title={t('settingsScreen.french')}
                        onPress={() => handleLanguageChange('fr')}
                        color={currentLang === 'fr' ? colors.accent : colors.primary}
                    />
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button
                        title={t('settingsScreen.dutch')}
                        onPress={() => handleLanguageChange('nl')}
                        color={currentLang === 'nl' ? colors.accent : colors.primary}
                    />
                </View>
            </View>
        </View>
    );
};

const dynamicStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: 30,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    switchLabel: {
        fontSize: 18,
        color: colors.textPrimary,
        marginLeft: 10,
    },
    text: {
        fontSize: 18,
        color: colors.textPrimary,
    },
    languageContainer: {
        width: '100%',
        alignItems: 'center',
    },
    languageTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: 15,
    },
    buttonContainer: {
        margin: 10,
        width: 150,
    },
});

export default SettingsScreen;