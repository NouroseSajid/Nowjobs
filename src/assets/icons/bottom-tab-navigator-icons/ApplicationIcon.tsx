import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import withIconProps, { IconProps } from "./withIconProps";

const ApplicationIcon: React.FC<IconProps> = (props) => (
  <Svg
    viewBox="0 0 100.04 109.64"
    {...props}
  >
    {/* Primary stroke elements */}
    <Path
      d="M60.33 19.07h30.28a7.86 7.86 0 0 1 7.93 7.78v73.51a7.85 7.85 0 0 1-7.93 7.78h-47a7.85 7.85 0 0 1-7.93-7.78V76.87"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M60.33 11.09c.57 31.87-36.66 36.54-47.17 14a31.6 31.6 0 0 1-2.72-14Z"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M60.33 68.64c.57-31.86-36.66-36.53-47.17-14a31.5 31.5 0 0 0-2.72 14Z"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Rect
      x="2.9"
      y="2.87"
      width="65.62"
      height="8.22"
      rx="2.83"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Rect
      x="3.6"
      y="68.82"
      width="65.62"
      height="8.22"
      rx="2.83"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />
    {/* Secondary stroke elements */}
    <Path
      d="M58.95 9.72c.57 31.87-36.62 36.57-47.16 14.01a31.6 31.6 0 0 1-2.73-14Z"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M58.95 67.29c.57-31.88-36.62-36.55-47.16-14a31.5 31.5 0 0 0-2.73 14Z"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Rect
      x="1.5"
      y="1.5"
      width="65.63"
      height="8.22"
      rx="2.83"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Rect
      x="2.2"
      y="67.45"
      width="65.63"
      height="8.22"
      rx="2.83"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M58.96 16.59h30.26a7.85 7.85 0 0 1 7.93 7.78v73.51a7.85 7.85 0 0 1-7.93 7.78h-47a7.85 7.85 0 0 1-7.89-7.78v-23.5"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
  </Svg>
);

export default withIconProps(ApplicationIcon);
