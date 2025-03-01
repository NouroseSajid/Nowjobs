import * as React from "react";
import Svg, { Path } from "react-native-svg";
import withIconProps, { IconProps } from "./withIconProps";

const PlanningIcon: React.FC<IconProps> = (props) => (
  <Svg
    viewBox="0 0 109.78 95.27"
    {...props}
  >
    {/* Primary stroke elements */}
    <Path
      d="M2.5 39h105.78v51.93a2.83 2.83 0 0 1-2.83 2.83H5.33a2.83 2.83 0 0 1-2.83-2.83V39Z"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M91 2.5h2.5a2 2 0 0 1 2 2v6.58H89V4.5a2 2 0 0 1 2-2ZM15.54 2.5h1.72a2 2 0 0 1 2 2v6.58h-5.72V4.5a2 2 0 0 1 2-2Z"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M2.5 39.04V17.76a4.05 4.05 0 0 1 4.05-4.05h97.73a4.05 4.05 0 0 1 4 4.05v21.28"
      fill={props.primaryFill}
      stroke={props.primaryStroke}
      strokeWidth={props.primaryStrokeWidth}
      strokeMiterlimit={10}
    />

    {/* Secondary stroke elements */}
    <Path
      d="M1.5 38h105.78v51.93a2.83 2.83 0 0 1-2.83 2.83H4.33a2.83 2.83 0 0 1-2.83-2.83V38Z"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M90 1.5h2.5a2 2 0 0 1 2 2v6.58H88V3.5a2 2 0 0 1 2-2ZM14.54 1.5h1.72a2 2 0 0 1 2 2v6.58h-5.72V3.5a2 2 0 0 1 2-2Z"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
    <Path
      d="M1.5 38.04V16.76a4.05 4.05 0 0 1 4.05-4.05h97.73a4.05 4.05 0 0 1 4 4.05v21.28"
      fill={props.secondaryFill}
      stroke={props.secondaryStroke}
      strokeWidth={props.secondaryStrokeWidth}
      strokeMiterlimit={10}
    />
  </Svg>
);

export default withIconProps(PlanningIcon);
