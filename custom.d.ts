declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';

declare module '*.svg?react' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;

  export default src;
}
