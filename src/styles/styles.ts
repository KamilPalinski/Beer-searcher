import MuiToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';

export const ToggleButton = styled(MuiToggleButton)({
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'black',
    backgroundColor: 'color-mix(in srgb, #34c9eb 75%, white)',
  },
});
