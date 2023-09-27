import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiToggleButtonGroup: {
      variants: [
        {
          props: { color: 'success' },
          style: {
            color: 'black',
            backgroundColor: 'blue',
          },
        },
      ],
    },
    MuiToggleButton: {
      variants: [],
    },
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
      main: '#808080',
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 1024,
      lg: 1600,
      xl: 1920,
    },
  },
});
