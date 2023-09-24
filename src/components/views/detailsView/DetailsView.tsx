import { useEffect, useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import {
  CardMedia,
  Box,
  CardContent,
  CardHeader,
  Typography,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

import { useApi } from 'hooks';
import { ModalComponent } from 'components';
import { ProductTypes } from 'types';

import {
  Image,
  ContainerWrap,
  ImageContainer,
  ListContainer,
  CardHeaderStyle,
  Description,
  Heading,
} from './DetailsView.styles';

export const DetailView = () => {
  const [data, setData] = useState<ProductTypes>();
  const [value, setValue] = useState('Malt');
  const { query } = useRouter();
  const { fetchData } = useApi();

  useEffect(() => {
    query.beerid && fetchData('getDetail', dataHandler, query.beerid?.toString());
  }, [query]);

  const dataHandler = (data: ProductTypes[]) => {
    data && data.map((item) => setData(item));
  };

  const changeHandler = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ModalComponent>
      <Box sx={ContainerWrap}>
        <Box sx={ImageContainer}>
          <CardMedia component="img" sx={Image} src={data?.image_url} />
        </Box>
        <CardContent>
          <CardHeader
            sx={CardHeaderStyle}
            titleTypographyProps={{ variant: 'h2' }}
            subheaderTypographyProps={{ variant: 'h3' }}
            title={data?.name}
            subheader={data?.tagline}
          />
          <Typography sx={Description}>{data?.description}</Typography>
          <Typography sx={Heading}>Product Details </Typography>
          <List>
            <ListItem disablePadding key="ABV">
              <ListItemText primary="ABV" secondary={data?.abv} />
            </ListItem>
            <ListItem disablePadding key="IBU">
              <ListItemText primary="IBU" secondary={data?.ibu} />
            </ListItem>
            <ListItem disablePadding key="YEAST">
              <ListItemText primary="YEAST" secondary={data?.ingredients.yeast} />
            </ListItem>
          </List>
          <Typography sx={Heading}>Ingredients</Typography>
          <>
            <Tabs value={value} onChange={changeHandler}>
              <Tab value="Malt" label="Malt" />
              <Tab value="Hops" label="Hops" />
            </Tabs>
            <List sx={ListContainer}>
              {value === 'Malt'
                ? data?.ingredients.malt.map((item) => {
                    return (
                      <ListItem key={item.name}>
                        <ListItemText
                          primary={item.name}
                          secondary={
                            <>
                              Amount : {item.amount.value} {item.amount.unit}
                            </>
                          }
                        />
                      </ListItem>
                    );
                  })
                : value === 'Hops' &&
                  data?.ingredients.hops.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        <ListItemText
                          primary={item.name}
                          secondary={
                            <>
                              Amount : {item.amount.value} {item.amount.unit}
                              <br />
                              Add : {item.add}
                              <br />
                              Attribute : {item.attribute}
                            </>
                          }
                        />
                      </ListItem>
                    );
                  })}
            </List>
          </>
        </CardContent>
      </Box>
    </ModalComponent>
  );
};
