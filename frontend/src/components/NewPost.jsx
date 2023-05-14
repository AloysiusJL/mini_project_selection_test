import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const NewPost = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUploadPhoto = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handlePost = () => {
    // Handle post logic here
  };

  return (
    <Container>
      <input
        type="file"
        accept="image/*"
        onChange={handleUploadPhoto}
        style={{ display: 'none' }}
        id="upload-photo-button"
      />
      <label htmlFor="upload-photo-button">
        <Button variant="contained" component="span">
          Upload Photo
        </Button>
      </label>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}

      <TextField label="Caption" variant="outlined" multiline rows={4} margin="normal" />

      <Button variant="contained" onClick={handlePost}>
        Post
      </Button>
    </Container>
  );
};

export default NewPost;
