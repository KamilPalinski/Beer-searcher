import { useState, MouseEvent, useEffect, useContext } from 'react';
import { Box, ToggleButtonGroup, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { PagesContext } from 'context';
import { ToggleButton } from 'styles';

import { PaginationContainer, List } from './Pagination.styles';

export const Pagination = () => {
  const [pages, setPages] = useState<Array<string | number>>([]);

  const { actualPage, pagesHandler } = useContext(PagesContext);
  const { breakpoints } = useTheme();
  const smallSize = useMediaQuery(breakpoints.down('sm'));

  const pageLayoutHandler = () => {
    setPages(
      actualPage === 1
        ? [1, 2, 3, '...', 15, 16, 17]
        : actualPage < 13
        ? [+actualPage - 1, actualPage, +actualPage + 1, '...', 15, 16, 17]
        : [12, 13, 14, 15, 16, 17],
    );
  };

  useEffect(() => {
    pageLayoutHandler();
  }, [actualPage]);

  return (
    <Box sx={PaginationContainer}>
      <ToggleButtonGroup sx={List} exclusive value={actualPage} onChange={pagesHandler}>
        {pages.map((item, index) => (
          <ToggleButton size={smallSize ? 'small' : 'medium'} value={item} key={index + 1}>
            {item}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};
