import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import { Spinner } from 'components';
import { Card } from 'components';
import { useApi } from 'hooks';
import { ProductTypes } from 'types';

import { Container, GridContainer, GridElement } from './cardList.styles';
export const CardList = () => {
  const [cards, SetCards] = useState<Array<ProductTypes>>([]);
  useEffect(() => {
    fetchData('GET', dataHandler);
  }, []);
  const dataHandler = (items: ProductTypes[]) => {
    items && SetCards(items);
  };
  const { fetchData, isLoading } = useApi();

  return (
    <Box sx={Container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Box sx={GridContainer}>
            {cards &&
              cards.map(
                (items, index) =>
                  index < 5 && (
                    <Card
                      sx={GridElement}
                      id={items.id}
                      key={items.name}
                      name={items.name}
                      image_url={items.image_url}
                      tagline={items.tagline}
                    />
                  ),
              )}
          </Box>
        </>
      )}
    </Box>
  );
};
