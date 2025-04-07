import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/theme';

type CardProps = {
  children: React.ReactNode;
  style?: object;
};

const Card = ({ children, style }: CardProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          shadowColor: colors.shadow,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
});

export default Card;