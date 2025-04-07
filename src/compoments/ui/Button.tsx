import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/theme';

type ButtonProps = {
  onPress: () => void;
  children: string;
  mode?: 'contained' | 'outlined';
  loading?: boolean;
  style?: object;
};

const Button = ({ 
  onPress, 
  children, 
  mode = 'contained', 
  loading = false, 
  style 
}: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: mode === 'contained' ? colors.primary : 'transparent',
          borderWidth: mode === 'outlined' ? 1 : 0,
          borderColor: colors.primary,
        },
        style,
      ]}
      disabled={loading}
      accessibilityLabel={children}
    >
      {loading ? (
        <ActivityIndicator color={colors.textPrimary} />
      ) : (
        <Text style={[
          styles.text,
          {
            color: mode === 'contained' ? colors.buttonText : colors.primary,
          }
        ]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;