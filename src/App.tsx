import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  const setScreenSize = () => {
    // vh 관련
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // window width 관련
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
