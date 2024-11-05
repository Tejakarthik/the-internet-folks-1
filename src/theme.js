// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0E2368',
    },
    secondary: {
      main: '#E23744', // Replace with Figma secondary color
    },
    text: {
      primary: '#333333', // Replace with Figma text color
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif', // Replace with Figma font family
  },
});

export default theme;
