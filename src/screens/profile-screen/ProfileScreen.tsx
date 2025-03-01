import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/theme';

const ProfileScreen: React.FC = () => {
    const { colors } = useTheme();

    return (
        <View style={styles(colors).container}>
            <Text style={styles(colors).text}>Profile Screen</Text>
        </View>
    );
};

const styles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
    },
});

export default ProfileScreen;