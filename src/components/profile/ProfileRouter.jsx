import React from 'react';
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from './profUtilits';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './profile.scss';

import Button from '@mui/material/Button';

import ProfileMain from './profileMain/ProfileMain';
import EditAccount from './EditAccount';

const ProfileRouter = ({ myUser }) => {
  let navigate = useNavigate();

  return (
    <div className="profile">
      <div className="profile-avatar">
        <Avatar {...stringAvatar(myUser.fullname)} sx={{ width: 50, height: 50 }} />
        <h5>{myUser.fullname}</h5>
      </div>
      <Routes>
        <Route path="*" element={<ProfileMain nav={navigate} />} />
        <Route path="pencil" element={<EditAccount />} />
      </Routes>

      <Button
        variant="contained"
        sx={{ width: '100%', marginTop: '5%', backgroundColor: '#E4E4E4', color: '#FF8B8B' }}
        onClick={() => navigate('/login')}
      >
        LOGOUT
      </Button>
    </div>
  );
};

export default ProfileRouter;
