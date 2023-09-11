import { Box, Typography } from '@mui/material';

import { CardTypes } from 'types';

import { Container, Image, Decorative, Name, Tagline } from './Card.styles';

export const Card = (props: CardTypes) => {
  return (
    <Box sx={Container}>
      <Box component="img" sx={Image} alt={props.name} src={props.image_url} />
      <Typography sx={Name}>{props.name}</Typography>
      <Box component="img" sx={Decorative} alt="decorative" src="/images/decorative.jpg" />
      <Typography sx={Tagline}>{props.tagline}</Typography>
    </Box>
  );
};
