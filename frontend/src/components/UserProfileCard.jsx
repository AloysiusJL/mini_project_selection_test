import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const UserProfileCard = ({ profilePicture, fullName, bio, username, email }) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <IconButton>
            <Avatar src={profilePicture} />
          </IconButton>
        }
        action={
          <IconButton>
            <EditIcon />
          </IconButton>
        }
        title={username}
        subheader={fullName}
      />
      <div style={{ padding: '16px' }}>
        <p>Email: {email}</p>
        <p>Bio: {bio}</p>
      </div>
    </Card>
  );
};

export default UserProfileCard;
