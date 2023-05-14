import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserProfileCard = ({ profilePicture, fullName, bio, username, email }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedUsername, setEditedUsername] = useState(username);
  const [editedFullName, setEditedFullName] = useState(fullName);
  const [editedBio, setEditedBio] = useState(bio);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Perform save operation here
    setEditMode(false);
    // Update the username, full name, and bio with the edited values
    // You can make API calls or update the state as per your implementation
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <IconButton>
            <Avatar src={profilePicture} />
          </IconButton>
        }
        action={
          editMode ? (
            <Button onClick={handleSave}>Save</Button>
          ) : (
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
          )
        }
        title={editMode ? (
          <TextField
            value={editedUsername}
            onChange={(e) => setEditedUsername(e.target.value)}
            size="small"
          />
        ) : (
          username
        )}
        subheader={editMode ? (
          <TextField
            value={editedFullName}
            onChange={(e) => setEditedFullName(e.target.value)}
            size="small"
          />
        ) : (
          fullName
        )}
      />
      <div style={{ padding: '16px' }}>
        <p>Email: {email}</p>
        <p>Bio: {editMode ? (
          <TextField
            value={editedBio}
            onChange={(e) => setEditedBio(e.target.value)}
            size="small"
          />
        ) : (
          bio
        )}</p>
      </div>
    </Card>
  );
};

export default UserProfileCard;
