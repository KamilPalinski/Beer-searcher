import { theme } from 'styles';

export const ContainerWrap = {
  height: '75vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  borderTop: 'solid 5px black',
  overflowY: 'auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
};

export const Image = {
  height: '300px',
  width: '200px',
  objectFit: 'contain',
};

export const ImageContainer = {
  paddingTop: '5px',
  height: '70%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const ListContainer = {
  marginTop: '5px',
  border: '2px solid black',
};

export const CardHeaderStyle = {
  display: 'center',
  p: '0',
  pb: '16px',
};

export const Description = {
  fontStyle: 'italic',
  pb: '16px',
};

export const Heading = {
  fontWeight: 'bold',
  variant: 'h3',
};
