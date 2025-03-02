import * as React from "react";
import { IconProps } from "../../../types/global";
import { useTheme } from "../../../theme/theme";

const withIconProps = (WrappedComponent: React.FC<IconProps>) => {
  const EnhancedComponent: React.FC<IconProps> = ({
    width = 24,
    height = 24,
    primaryFill = "none",
    secondaryFill = "none",
    primaryStroke,
    secondaryStroke,
    primaryStrokeWidth = 3,
    secondaryStrokeWidth = 3,
    focused = false,
    ...props
  }) => {
    const { colors } = useTheme();
    
    // Use theme colors based on focus state
    const activePrimaryStroke = focused ? colors.tabActive : colors.tabInactive;
    const activeSecondaryStroke = focused ? colors.tabActive : colors.tabInactive;
    
    return (
      <WrappedComponent
        width={width}
        height={height}
        primaryFill={primaryFill}
        secondaryFill={secondaryFill}
        primaryStroke={primaryStroke || activePrimaryStroke}
        secondaryStroke={secondaryStroke || activeSecondaryStroke}
        primaryStrokeWidth={primaryStrokeWidth}
        secondaryStrokeWidth={secondaryStrokeWidth}
        focused={focused}
        {...props}
      />
    );
  };

  return EnhancedComponent;
};

export default withIconProps;