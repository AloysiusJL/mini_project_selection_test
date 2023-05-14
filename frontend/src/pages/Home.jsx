import React, { useContext, useState } from 'react';
import { AuthContext } from '../components/AuthContext';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewPost from '../components/NewPost';
import Welcome from '../components/Welcome';

export default function Home() {
  const [showNewPost, setShowNewPost] = useState(false);
  const { loggedIn, username, token, setLoggedIn, setUsername, setToken } = useContext(AuthContext);

  console.log('loggedIn:', loggedIn); // Add this line to log the value

  const handlePostClick = () => {
    setShowNewPost(true);
  };

  return (
    <>
      {!loggedIn && <Welcome />}
      {loggedIn && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            minHeight: '100vh',
            p: 2,
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              backgroundColor: '#ffffff',
              mb: '0px',
              mt: '0px',
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={4} sx={{ mb: 2 }}>
                <Button
                  startIcon={<HomeIcon sx={{ fontSize: 28 }} />}
                  variant="outlined"
                  size="large"
                  fullWidth
                >
                  Home
                </Button>
              </Grid>
              <Grid item xs={4} sx={{ mb: 2 }}>
                <Button
                  startIcon={<PostAddIcon sx={{ fontSize: 28 }} />}
                  variant="outlined"
                  size="large"
                  fullWidth
                  onClick={handlePostClick}
                >
                  Post
                </Button>
              </Grid>
              <Grid item xs={4} sx={{ mb: 2 }}>
                <Button
                  startIcon={<AccountCircleIcon sx={{ fontSize: 28 }} />}
                  variant="outlined"
                  size="large"
                  fullWidth
                >
                  Profile
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '-15vh',
            }}
          >
            {showNewPost && <NewPost />}
          </Grid>
        </Grid>
      )}
    </>
  );
}
