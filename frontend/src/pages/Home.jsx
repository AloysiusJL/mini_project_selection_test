import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
      spacing={2}
      sx={{
        minHeight: '100vh',
        p: 2,
      }}
    >
      <Grid item xs={3} sx={{ mb: 2 }}>
        <Button
          component={RouterLink}
          to="/"
          startIcon={<HomeIcon sx={{ fontSize: 20 }} />}
          variant="outlined"
          size="small"
          fullWidth
          sx={{ fontSize: isSmallScreen ? 0 : 12 }}
        >
          {!isSmallScreen && 'Home'}
        </Button>
      </Grid>
      <Grid item xs={3} sx={{ mb: 2 }}>
        <Button
          component={RouterLink}
          to="/post"
          startIcon={<PostAddIcon sx={{ fontSize: 20 }} />}
          variant="outlined"
          size="small"
          fullWidth
          sx={{ fontSize: isSmallScreen ? 0 : 12 }}
        >
          {!isSmallScreen && 'Post'}
        </Button>
      </Grid>
      <Grid item xs={3} sx={{ mb: 2 }}>
        <Button
          component={RouterLink}
          to="/profile"
          startIcon={<AccountCircleIcon sx={{ fontSize: 20 }} />}
          variant="outlined"
          size="small"
          fullWidth
          sx={{ fontSize: isSmallScreen ? 0 : 12 }}
        >
          {!isSmallScreen && 'Profile'}
        </Button>
      </Grid>
    </Grid>
  );
}
