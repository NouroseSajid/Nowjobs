import React from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';
import i18next from 'i18next';
import { useTheme, COLOR_SCHEMES } from '../../theme';
import '../../i18n';

const SettingsScreen: React.FC = () => {
    const { colors, isDark, setScheme } = useTheme();
    const styles = dynamicStyles(colors);

    const changeLanguage = (lng: string) => {
        i18next.changeLanguage(lng);
    };

    return (
        <View style={styles.container}>
            <Switch
                value={isDark}
                onValueChange={(value) => {
                    setScheme(value ? COLOR_SCHEMES.DARK : COLOR_SCHEMES.LIGHT);
                }}
            />
            <Text style={styles.text}>
                {isDark ? 'Dark Mode' : 'Light Mode'}
            </Text>
            <Text style={styles.text}>Settings Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="English"
                    onPress={() => changeLanguage('en')}
                    color={colors.primary}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="French"
                    onPress={() => changeLanguage('fr')}
                    color={colors.primary}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Dutch"
                    onPress={() => changeLanguage('nl')}
                    color={colors.primary}
                />
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
    },
    text: {
        fontSize: 20,
        color: colors.text,
    },
    buttonContainer: {
        margin: 10,
    },
});

export default SettingsScreen;