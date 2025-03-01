import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import withIconProps, { IconProps } from "./withIconProps";

const VacanciesIcon: React.FC<IconProps> = (props) => (
  <Svg
    viewBox="0 0 106.97 109.76"
    {...props}
  >
    {/* Primary stroke elements */}
    <Rect
      x="23.07"
      y="13.03"
      width="61.32"
      height="88.57"
      rx="2.83"
      transform="rotate(-30 48.74 62.4)"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M65.27 19.69h36.33a3.87 3.87 0 0 1 3.87 3.87v80.84a3.86 3.86 0 0 1-3.87 3.86H48.01a3.82 3.82 0 0 1-3-1.38"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />

    {/* Secondary stroke elements */}
    <Rect
      x="21.71"
      y="11.67"
      width="61.32"
      height="88.57"
      rx="2.83"
      transform="rotate(-30 47.385 61.037)"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M63.91 18.33h36.33a3.86 3.86 0 0 1 3.86 3.86v80.85a3.86 3.86 0 0 1-3.86 3.86H46.65a3.89 3.89 0 0 1-3-1.38"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
  </Svg>
);

export default withIconProps(VacanciesIcon);
