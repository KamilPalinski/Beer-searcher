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
    white: {
      main: '#fafafa',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1280,
      lg: 1600,
      xl: 1920,
    },
  },
});
