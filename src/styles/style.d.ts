import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;

      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;

      red: string;
      coral: string;
      gradient: string;

      green_1: string;
      green_2: string;
      green_3: string;

      blue_1: string;
      yellow: string;
    };
    fonts: {
      body_regular_12: SerializedStyles;

      body_regular_10: SerializedStyles;
      body_semibold_10: SerializedStyles;
      body_regular_12: SerializedStyles;
      body_medium_12: SerializedStyles;
      body_semibold_12: SerializedStyles;
      body_regular_13: SerializedStyles;
      body_medium_13: SerializedStyles;
      body_semibold_13: SerializedStyles;
      body_semibold_14: SerializedStyles;
      body_regular_14: SerializedStyles;
      body_bold_14: SerializedStyles;
      body_regular_15: SerializedStyles;

      body_medium_15: SerializedStyles;
      body_semibold_15: SerializedStyles;
      body_bold_15: SerializedStyles;
      body_regular_16: SerializedStyles;
      body_semibold_16: SerializedStyles;
      body_bold_16: SerializedStyles;
      body_semibold_18: SerializedStyles;
      title_regular_18: SerializedStyles;
      title_medium_18: SerializedStyles;
      title_semibold_18: SerializedStyles;
      title_bold_18: SerializedStyles;
    };
  }
}
