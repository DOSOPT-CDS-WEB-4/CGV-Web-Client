import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      bg: string;

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
      regular_smibold_12: SerializedStyles;
    };
  }
}
