import * as React from "react";
import Svg, { Path } from "react-native-svg";
import withIconProps, { IconProps } from "./withIconProps";

const HomeIcon: React.FC<IconProps> = (props) => (
  <Svg
    viewBox="0 0 105.68 111.56"
    {...props}
  >
    {/* Primary stroke elements */}
    <Path
      d="M14.16 56.75h78.48v50.47a2.83 2.83 0 0 1-2.83 2.83H17a2.83 2.83 0 0 1-2.83-2.83V56.75Z"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M55.36 4.41 7.42 52.87a2.83 2.83 0 0 0 2 4.82h95.87a2.83 2.83 0 0 0 2-4.82L59.39 4.41a2.84 2.84 0 0 0-4.03 0Z"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M49.3 81.92h8.21A5.52 5.52 0 0 1 63 87.44v21.13H43.78V87.44a5.52 5.52 0 0 1 5.52-5.52Z"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />

    {/* Secondary stroke elements */}
    <Path
      d="M13 55.62h78.51v50.47a2.83 2.83 0 0 1-2.83 2.83H15.87a2.83 2.83 0 0 1-2.87-2.83V55.62Z"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M54.23 3.29 6.29 51.74a2.83 2.83 0 0 0 2 4.82h95.87a2.83 2.83 0 0 0 2-4.82L58.26 3.29a2.82 2.82 0 0 0-4.03 0Z"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M48.17 80.79h8.21a5.52 5.52 0 0 1 5.52 5.52v21.13H42.65V86.31a5.52 5.52 0 0 1 5.52-5.52Z"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
  </Svg>
);

export default withIconProps(HomeIcon);