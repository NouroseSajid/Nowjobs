import * as React from "react";
import { IconProps } from "../../../types/global";

const withIconProps = (WrappedComponent: React.FC<IconProps>) => {
  const EnhancedComponent: React.FC<IconProps> = ({
    width = 24,
    height = 24,
    primaryFill = "none",
    secondaryFill = "none",
    primaryStroke = "#706f6f",
    secondaryStroke = "#1d1d1b",
    primaryStrokeWidth = 3,
    secondaryStrokeWidth = 3,
    ...props
  }) => (
    <WrappedComponent
      width={width}
      height={height}
      primaryFill={primaryFill}
      secondaryFill={secondaryFill}
      primaryStroke={primaryStroke}
      secondaryStroke={secondaryStroke}
      primaryStrokeWidth={primaryStrokeWidth}
      secondaryStrokeWidth={secondaryStrokeWidth}
      {...props}
    />
  );

  return EnhancedComponent;
};

export default withIconProps;
