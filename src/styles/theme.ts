import { css, DefaultTheme } from 'styled-components';

const colors = {
  white: '#DADADA',
  black: '#000000',

  gray100: '#F6F6F6',
  gray200: '#DDDDDD',
  gray300: '#D1D1D1',
  gray400: '#B4B4B4',
  gray500: '#ACACAC',
  gray600: '#9A9A9A',
  gray700: '#666666',
  gray800: '#333333',
  gray900: '#222222',

  red: '#FA4357',
  coral: '#FF6362',
  gradient: 'linear-gradient(90deg, #FB4458 11.4%, #F06330 89.47%)',

  green_1: '#9FCD63',
  green_2: '#408450',
  green_3: '#4CA960',

  blue_1: '#70A8EA',
  yellow: '#FBFF31',
};

const fonts = {
  regular_smibold_12: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  `,
  regular_13: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  `,
  semibold_bold_14: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  `,
  regular_15: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  `,
  regular_semibold_bold_16: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  `,
  regular_smibold_18: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  `,
};

const theme: DefaultTheme = { colors, fonts };

export default theme;
