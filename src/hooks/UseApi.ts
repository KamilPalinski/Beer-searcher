import { useCallback, useState } from 'react';

import { ProductTypes } from 'types';

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = useCallback(
    async (
      method: string,
      catchData: (event: ProductTypes[]) => void,
      queryParams?: { [key: string]: string } | string,
    ) => {
      const query = new URLSearchParams(queryParams).toString();
      let response;
      try {
        setIsLoading(true);
        if (method === 'getDetail') {
          response = await fetch(`https://api.punkapi.com/v2/beers/${queryParams}`);
        }
        if (method === 'getBeers') {
          response = await fetch(`https://api.punkapi.com/v2/beers?${query}`);
        }
        const responseData = await response?.json();
        const sentData = catchData?.(responseData);
        setIsLoading(false);
        return sentData;
      } catch (error) {
        throw new Error(error as unknown as string);
      }
    },
    [],
  );

  return { fetchData, isLoading };
};
