import { Box, Button } from '@mui/material';
import Link from 'next/link';

import { AppRoute } from 'types';

import * as Styles from './Navbar.styles';

const menuItems = [{ title: 'Home', href: AppRoute.Home }];

export const Navbar = () => (
  <Box component="nav" sx={Styles.NavbarWrapper}>
    <ul>
      {menuItems.map(({ title, href }) => (
        <Link key={title} href={href}>
          <Button key={title} sx={Styles.NavButton}>
            {title}
          </Button>
        </Link>
      ))}
    </ul>
  </Box>
);
