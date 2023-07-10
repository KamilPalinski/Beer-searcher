import { useCallback, useState } from 'react';

import { ProductProp } from 'types';

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = useCallback(
    async (method: string, catchData: (event: ProductProp) => void, queryParams?: string | undefined) => {
      let response;
      try {
        setIsLoading(true);
        if (method === 'GET') {
          response = await fetch(`https://api.punkapi.com/v2/beers/${queryParams}`);
        }
        console.log(queryParams);
        if (method === 'getDetail') {
          response = await fetch(`https://api.punkapi.com/v2/beers?${queryParams}`);
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
