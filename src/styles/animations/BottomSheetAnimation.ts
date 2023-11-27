import { keyframes } from 'styled-components';

export const slideUp = keyframes`
  from {
    transform: translateY(51.5rem);
  }
  to {
    transform: translateY(0);
  }
`;

export const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(51.5rem);
  }
  `;
