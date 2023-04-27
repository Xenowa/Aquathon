import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
// Loading Fonts
import "@fontsource/poppins"

// Creating a custom theme
const darkTheme = createTheme({
  // Custom color palette
  palette: {
    mode: 'dark',
    primary: {
      main: "#000e21"
    },
    primaryLight: {
      main: "#014eb8"
    },
    secondary: {
      main: "#33c9fc"
    },
    secondaryLight: {
      main: "#e8f9ff"
    }
  },

  // Custom font sizes
  typography: {
    fontFamily: ["poppins", "sans-serif"].join(","),
    h1: {
      fontSize: "32px"
    },
    h2: {
      fontSize: "30px"
    },
    h3: {
      fontSize: "24px"
    },
    h4: {
      fontSize: "18px"
    },
    h5: {
      fontSize: "15px"
    },
    h6: {
      fontSize: "12px"
    },
    p: {
      fontSize: "12px"
    },
  },

  // Custom color for MUI paper
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--primary-light)",
        }
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
)
