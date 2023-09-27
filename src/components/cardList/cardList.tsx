import { Box } from '@mui/material';

import { Spinner } from 'components';
import { Card } from 'components';
import { useApi } from 'hooks';
import { CardListTypes } from 'types';

import { Container, GridContainer, GridElement } from './cardList.styles';

export const CardList = ({ cards }: CardListTypes) => {
  const { isLoading } = useApi();

  return (
    <Box sx={Container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Box sx={GridContainer}>
            {cards &&
              cards.map((items) => (
                <Card
                  sx={GridElement}
                  id={items.id}
                  key={items.name}
                  name={items.name}
                  image_url={items.image_url}
                  tagline={items.tagline}
                />
              ))}
          </Box>
        </>
      )}
    </Box>
  );
};
