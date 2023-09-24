import { SxProps } from '@mui/material';

export interface CardTypes {
  name: string;
  image_url: string;
  tagline: string;
  id: number;
  sx?: SxProps;
}
