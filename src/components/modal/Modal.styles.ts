import { theme } from 'styles';

export const Backdrop = {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100vh',
  minWidth: '100vw',
  zIndex: '20',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
};

export const Modal = {
  position: 'fixed',
  width: '1000px',
  [theme.breakpoints.down('sm')]: {
    width: '300px',
    marginLeft: '-150px',
  },

  [theme.breakpoints.between('sm', 'md')]: {
    width: '600px',
    marginLeft: '-300px',
  },

  height: '90vh',
  top: '50%',
  left: '50%',
  marginTop: '-45vh',
  marginLeft: '-500px',
  background: 'white',
  padding: '5px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  zIndex: '30',
};

export const Button = {
  fontSize: '24px',
  float: 'right',
};
