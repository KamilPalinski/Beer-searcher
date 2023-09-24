import { Box, CircularProgress } from '@mui/material';
export const Spinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        height: '100vh',
      }}
    >
      <CircularProgress size={100} />
    </Box>
  );
};
