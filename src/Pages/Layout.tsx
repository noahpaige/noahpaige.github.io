import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import SurfingIcon from '@mui/icons-material/Surfing';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  Outlet,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';


function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}


export default function Album() {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar >
          <SurfingIcon sx={{ mr: 2, fontSize: 50 }} />
          <Typography variant="h6" sx={{fontSize: 50}} color="inherit" noWrap>
            NOAH PAIGE
          </Typography>
          <Button component={RouterLink} variant="text" sx={{ color: 'white', marginLeft: 'auto'}} to="/">
            <Typography variant="h6" color="inherit" noWrap>Home</Typography>
          </Button>
          <Button component={RouterLink} variant="text" sx={{color: 'white'}} to="/blogs">
            <Typography variant="h6" color="inherit" noWrap>Blogs</Typography>
          </Button>
          <Button component={RouterLink} variant="text" sx={{color: 'white'}} to="/contact">
          <Typography variant="h6" color="primary-light" noWrap>Contact</Typography>
          </Button>
        </Toolbar>
      </AppBar>

      <Outlet />

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </div>
  );
}