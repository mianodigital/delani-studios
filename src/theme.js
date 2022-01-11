import { createGlobalStyle } from 'styled-components';

// Create a global style for use by the <ThemeProvider /> in App.js
export const GlobalStyles = createGlobalStyle`
// Import font from google
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@100;200;300;400;500;600;700;800;900&display=swap');

  // Implementing other global styles
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans Display', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    margin: 0 auto;
    }

  img {
    max-width: 100%;
    }
`;

// creating a custom reusable theme which is exported to App.js for use by <ThemeProvider />
export const theme = {
  colors: {
    primary: '#eff0e0',
    secondary: '#3c3c3c',
    tertiary: '#ffffff',
  },
  media: {
    small: '320px',
    medium: '768px',
    large: '1080px',
    xlarge: '1440px',
  },
};
