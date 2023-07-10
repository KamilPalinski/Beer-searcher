import { Box } from '@mui/system';

import * as Styles from './Empty.styled';

const Empty = () => {
  return (
    <Box sx={Styles.EmptyWrapper}>
      {/* <img src={EmptyBag} alt="Empty bag" /> */}
      <h1>Oooops... {`It's`} empty here</h1>
      <p>There as no products on the list</p>
    </Box>
  );
};

export default Empty;
