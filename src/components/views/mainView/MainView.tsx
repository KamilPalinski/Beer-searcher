import { useState, useEffect, useContext } from 'react';
import { Box } from '@mui/material';

import { CardList, Pagination, Spinner } from 'components';
import { useApi } from 'hooks';
import { PagesContext } from 'context';
import { ProductTypes } from 'types';

import { Container } from './MainView.styles';

export const MainView = () => {
  const [cards, SetCards] = useState<Array<ProductTypes>>([]);
  const { fetchData, isLoading } = useApi();
  const { actualPage } = useContext(PagesContext);
  const queryParamsPage = {
    page: actualPage.toString(),
    per_page: '20',
  };
  console.log(isLoading);
  useEffect(() => {
    fetchData('getBeers', dataHandler, queryParamsPage);
  }, [actualPage]);
  const dataHandler = (items: ProductTypes[]) => {
    items && SetCards(items);
  };

  return (
    <Box sx={Container}>
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <CardList cards={cards} />

            <Pagination />
          </>
        )}
      </>
    </Box>
  );
};
