import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
    },
  },
  palette: {
    primary: {
      main: '#004ae0',
    },
    secondary: {
      main: '#282c34',
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 769,
      md: 1024,
      lg: 1600,
      xl: 1920,
    },
  },
});
