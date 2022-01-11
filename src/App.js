import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import { GlobalStyles, theme } from './theme';

function App() {
  return (
    // Configuration for global styles
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        {/* this route is responsible for rendering the home page */}
        <Route path='/' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
