import { Box } from '@mui/material';

import { CardList } from 'components';

import { Container } from './MainView.styles';

export const MainView = () => {
  return (
    <Box sx={Container}>
      <CardList />
    </Box>
  );
};
