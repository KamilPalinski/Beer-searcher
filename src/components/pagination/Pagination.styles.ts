import { theme } from 'styles';

export const PaginationContainer = {
  margin: 'auto',
  padding: '20px',
};

export const List = {
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    gap: '15px',
  },
  gap: '30px',
};
