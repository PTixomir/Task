import React from 'react';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import { Content } from './app/components/Content';
import { ThemeProvider } from 'theming';
import { IAppTheme } from './app/interfaces/IAppTheme';

const theme: IAppTheme = {
  errorCodeColor: '#E3002C !important',
  headBg: '#E3002C',
  headColor: '#fff',
  headHeight: '100px',
  contentBg: '#f8f8f8',
  footBg: 'rgba(0, 0, 0, 0.9)',
  footColor: '#fff',
  footHeight: '50px',
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
