import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CardMedia, Box, CardContent, CardHeader, Typography } from '@mui/material';

import { useApi } from 'hooks';
import { ModalComponent } from 'components';
import { ProductTypes } from 'types';

import { Image, ContainerWrap, ImageContainer } from './DetailsView.styles';

export const DetailView = () => {
  const [data, setData] = useState<ProductTypes>();
  const { query } = useRouter();
  const { fetchData, isLoading } = useApi();

  useEffect(() => {
    query.beerid && fetchData('GET', dataHandler, query.beerid?.toString());
  }, [query]);
  const dataHandler = (data: Array<ProductTypes>) => {
    data.map((item) => setData(item));
  };
  console.log(data);
  return (
    <ModalComponent>
      <Box sx={ContainerWrap}>
        <Box sx={ImageContainer}>
          <CardMedia component="img" sx={Image} src={data?.image_url} />
        </Box>
        <CardContent>
          <CardHeader title={data?.name} subheader={data?.tagline} />
          <Typography>{data?.description}</Typography>
          <Typography>ABV: {data?.abv}</Typography>
          <Typography>IBU: {data?.ibu}</Typography>
          <Typography>Ingredients:</Typography>
          <>
            Malt:
            {data?.ingredients.malt.map((item) => {
              console.log(item);
              return <Typography key={item.name}>{item.name}</Typography>;
            })}
          </>
        </CardContent>
      </Box>
    </ModalComponent>
  );
};
