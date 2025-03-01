import React from 'react';
import { SvgProps } from 'react-native-svg';

declare module '*.png' {
    const value: any;
    export default value;
}

declare module '*.jpg' {
    const value: any;
    export default value;
}

declare module '*.jpeg' {
    const value: any;
    export default value;
}

declare module '*.gif' {
    const value: any;
    export default value;
}

declare module '*.svg' {
    const content: React.FC<SvgProps>;
    export default content;
}

declare module 'react-native-dotenv' {
    export const API_URL: string;
    export const ANOTHER_ENV_VAR: string;
}

declare namespace React {
  type ReactNode = React.ReactChild | React.ReactFragment | React.ReactPortal | boolean | null | undefined;
}

export interface IconProps {
  width?: number;
  height?: number;
  primaryFill?: string;
  secondaryFill?: string;
  primaryStroke?: string;
  secondaryStroke?: string;
  primaryStrokeWidth?: number;
  secondaryStrokeWidth?: number;
}

export type BottomTabParamList = {
  Home: undefined;
  Vacancies: undefined;
  Application: undefined;
  Chat: undefined;
  Planning: undefined;
};