import { CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';

import { theme } from '../styles';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children, emotionCache }: AppProvidersProps) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </CacheProvider>
);
