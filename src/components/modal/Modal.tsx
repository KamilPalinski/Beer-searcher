import { Button, Container } from '@mui/material';
import { useRouter } from 'next/router';

import { Spinner } from 'components/spinner/Spinner';
import { useApi } from 'hooks';

import { ModalProps } from './Modal.types';
import * as Styles from './Modal.styles';
export const ModalComponent = ({ children }: ModalProps) => {
  const { back } = useRouter();
  const { isLoading } = useApi();
  const handleClick = () => {
    back();
  };
  return (
    <>
      <Container sx={Styles.Backdrop} onClick={handleClick} />
      <Container disableGutters sx={Styles.Modal}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Button sx={Styles.Button} onClick={handleClick}>
              X
            </Button>
            {children}
          </>
        )}
      </Container>
    </>
  );
};
