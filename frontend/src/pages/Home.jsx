import React, { useContext, useState } from 'react';
import { AuthContext } from '../components/AuthContext';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewPost from '../components/NewPost';
import Welcome from '../components/Welcome';
import ContentCard from '../components/ContentCard';

export default function Home() {
  const [curentPage, setCurentPage] = useState('home');
  const { loggedIn, username, token, setLoggedIn, setUsername, setToken } = useContext(AuthContext);

  console.log('loggedIn:', loggedIn); // Add this line to log the value
  console.log('username:', username); // Add this line to log the value
  console.log('token:', token); // Add this line to log the value

  // Dummy data for posts
  const posts = [
    {
      id: 1,
      username: 'user1',
      media: 'https://nurserynisarga.in/wp-content/uploads/2019/10/Red-Rose.jpg',
      createdDate: '2023-05-15',
      likes: 10,
    },
    {
      id: 2,
      username: 'user2',
      media: 'https://w0.peakpx.com/wallpaper/123/54/HD-wallpaper-scenery-lake-nature-sky-tree-water.jpg',
      createdDate: '2023-05-16',
      likes: 5,
    },
    // Add more posts as needed
  ];

  const handlePostClick = () => {
    setCurentPage('post');
  };


  const handleHomeClick = () => {
    setCurentPage('home')
  }

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
              width: '100vw'
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              {/* Navigation Buttons */}
              <Grid item xs={4} sx={{ mb: 2 }}>
                <Button
                  startIcon={<HomeIcon sx={{ fontSize: 28 }} />}
                  variant="outlined"
                  size="large"
                  fullWidth
                  onClick={handleHomeClick}
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
          {/* Render content based on currentPage */}
          {curentPage === 'home' && (
            <>
              {posts.map((post) => (
                <Grid item key={post.id} xs={12} sm={6} md={4}>
                  <ContentCard post={post} />
                </Grid>
              ))}
            </>
          )}

          {curentPage === 'post' && (
            <NewPost />
          )}
        </Grid>
      )}
    </>
  );
}
