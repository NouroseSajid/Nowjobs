import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Switch, Dimensions, ScrollView, BackHandler } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme/theme';
import { useAuth } from '../../context/AuthContext';
import { changeLanguage, getCurrentLanguage, SupportedLanguage } from '../../i18n';
import { LinearGradient } from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const SettingsScreen: React.FC = () => {
    const { colors, isDark, setScheme, useGradient, toggleGradient } = useTheme();
    const { t } = useTranslation();
    const { logout } = useAuth();
    const [currentLang, setCurrentLang] = useState<SupportedLanguage>(getCurrentLanguage() as SupportedLanguage);
    const navigation = useNavigation();
    const LOGOUT_BEHAVIOR = 1; // 0: exit app, 1: go to LoginScreen
    
    const styles = dynamicStyles(colors, SCREEN_WIDTH, SCREEN_HEIGHT);

    // Handle language change
    const handleLanguageChange = async (lng: SupportedLanguage) => {
        await changeLanguage(lng);
        setCurrentLang(lng);
    };

    const handleLogout = async () => {
        await logout();
        if (LOGOUT_BEHAVIOR === 0) {
            BackHandler.exitApp();
        } else {
            navigation.navigate("LoginScreen");
        }
    };

    const Container = useGradient ? LinearGradient : View;
    const containerProps = useGradient ? {
        colors: [colors.gradientStart, colors.gradientEnd],
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 },
        style: styles.container
    } : {
        style: styles.container
    };

    return (
        <Container {...containerProps}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.card}>
                    <Text style={styles.headerText}>{t('settingsScreen.settings')}</Text>
                    
                    <View style={styles.optionContainer}>
                        <Text style={styles.optionLabel}>{isDark ? t('settingsScreen.darkMode') : t('settingsScreen.lightMode')}</Text>
                        <Switch
                            value={isDark}
                            onValueChange={(value) => {
                                setScheme(value ? COLOR_SCHEMES.DARK : COLOR_SCHEMES.LIGHT);
                            }}
                            trackColor={{ false: '#767577', true: `${colors.primary}80` }}
                            thumbColor={isDark ? colors.primary : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                        />
                    </View>

                    <View style={styles.optionContainer}>
                        <Text style={styles.optionLabel}>Use Gradient Background</Text>
                        <Switch
                            value={useGradient}
                            onValueChange={toggleGradient}
                            trackColor={{ false: '#767577', true: `${colors.primary}80` }}
                            thumbColor={useGradient ? colors.primary : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                        />
                    </View>
                </View>
                
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>{t('settings')}</Text>
                    
                    <View style={styles.languageButtonsContainer}>
                        <View style={[
                            styles.languageButton, 
                            currentLang === 'en' && { backgroundColor: `${colors.primary}15` }
                        ]}>
                            <Button
                                title={t('settingsScreen.english')}
                                onPress={() => handleLanguageChange('en')}
                                color={currentLang === 'en' ? colors.primary : colors.textSecondary}
                            />
                        </View>
                        
                        <View style={[
                            styles.languageButton, 
                            currentLang === 'fr' && { backgroundColor: `${colors.primary}15` }
                        ]}>
                            <Button
                                title={t('settingsScreen.french')}
                                onPress={() => handleLanguageChange('fr')}
                                color={currentLang === 'fr' ? colors.primary : colors.textSecondary}
                            />
                        </View>
                        
                        <View style={[
                            styles.languageButton, 
                            currentLang === 'nl' && { backgroundColor: `${colors.primary}15` }
                        ]}>
                            <Button
                                title={t('settingsScreen.dutch')}
                                onPress={() => handleLanguageChange('nl')}
                                color={currentLang === 'nl' ? colors.primary : colors.textSecondary}
                            />
                        </View>
                    </View>
                    
                    {/* Updated Logout Button */}
                    <View style={styles.logoutButtonContainer}>
                        <Button
                            title={t('auth.logout')}
                            onPress={handleLogout}
                            color={colors.primary}
                        />
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
};

const dynamicStyles = (colors: any, screenWidth: number, screenHeight: number) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContent: {
        padding: screenWidth * 0.05,
        paddingBottom: screenHeight * 0.1,
    },
    card: {
        backgroundColor: colors.surface,
        borderRadius: 12,
        padding: screenWidth * 0.05,
        marginBottom: screenHeight * 0.02,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    headerText: {
        fontSize: screenWidth * 0.06,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: screenHeight * 0.02,
    },
    sectionTitle: {
        fontSize: screenWidth * 0.05,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: screenHeight * 0.02,
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: screenHeight * 0.015,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    optionLabel: {
        fontSize: screenWidth * 0.04,
        color: colors.textPrimary,
    },
    languageButtonsContainer: {
        marginTop: screenHeight * 0.01,
    },
    languageButton: {
        marginVertical: screenHeight * 0.01,
        borderRadius: 8,
        overflow: 'hidden',
    },
    logoutButtonContainer: {
        marginTop: screenHeight * 0.02,
    },
});

export default SettingsScreen;