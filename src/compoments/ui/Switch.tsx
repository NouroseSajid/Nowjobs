import React from 'react';
import { Switch, Pressable, Animated, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/theme';

type CustomSwitchProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  style?: object;
};

const CustomSwitch = ({ value, onValueChange, style }: CustomSwitchProps) => {
  const { colors } = useTheme();
  const translateX = React.useRef(new Animated.Value(value ? 18 : 0)).current;

  const toggleSwitch = () => {
    Animated.timing(translateX, {
      toValue: value ? 0 : 18,
      duration: 200,
      useNativeDriver: true,
    }).start();
    onValueChange(!value);
  };

  return (
    <Pressable
      onPress={toggleSwitch}
      style={[
        styles.container,
        {
          backgroundColor: value ? `${colors.primary}30` : colors.border,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.thumb,
          {
            backgroundColor: value ? colors.primary : colors.surface,
            transform: [{ translateX }],
          },
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    padding: 2,
  },
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default CustomSwitch;