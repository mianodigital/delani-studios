import { createGlobalStyle } from 'styled-components';

// Create a global style for use by the <ThemeProvider /> in App.js
export const GlobalStyles = createGlobalStyle`

// Import font from google
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  // Implementing other global styles
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
    };
/* *:focus {
    outline: none;
}; */
  body {
    font-family: ${({ theme }) => theme.font.open};
    background: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    margin: 0 auto;
    };

  img {
    max-width: 100%;
    };
`;

// creating a custom reusable theme which is exported to App.js for use by <ThemeProvider />
export const theme = {
  colors: {
    primary: '#eff0e0',
    secondary: '#3c3c3c',
    tertiary: '#ffffff',
    light: '#dddcda',
  },
  media: {
    small: '320px',
    medium: '768px',
    large: '1080px',
    xlarge: '1440px',
  },
  font: {
    open: `'Open Sans', sans-serif`,
  },
};
