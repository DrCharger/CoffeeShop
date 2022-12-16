import React from 'react';
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from './profUtilits';
import { useNavigate } from 'react-router-dom';

import './profile.scss';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import NotesIcon from '@mui/icons-material/Notes';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Button from '@mui/material/Button';
import { profileArr } from '../../data/profile';

const Profile = ({ myUser }) => {
  let navigate = useNavigate();

  return (
    <div className="profile">
      <div className="profile-avatar">
        <Avatar {...stringAvatar(myUser.fullname)} sx={{ width: 50, height: 50 }} />
        <h5>{myUser.fullname}</h5>
      </div>
      <div className="profile__tools">
        {profileArr.map(el => (
          <div className="profile__tools-container" key={el.id}>
            <div className="profile__tools-container__bg">
              {el.img === 'pencil' && <BorderColorOutlinedIcon sx={{ fontSize: 20 }} />}
              {el.img === 'loc' && <RoomOutlinedIcon sx={{ fontSize: 20 }} />}
              {el.img === 'pay' && <AccountBalanceWalletIcon sx={{ fontSize: 20 }} />}
              {el.img === 'rew' && <DiscountOutlinedIcon sx={{ fontSize: 20 }} />}
              {el.img === 'set' && <SettingsIcon sx={{ fontSize: 20 }} />}
              {el.img === 'policy' && <NotesIcon sx={{ fontSize: 20 }} />}
              {el.img === 'about' && <InfoOutlinedIcon sx={{ fontSize: 20 }} />}
            </div>
            <span>{el.text}</span>
            <ArrowForwardIosOutlinedIcon sx={{ color: '#8D8D8D', fontSize: 15 }} />
          </div>
        ))}
      </div>
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

export default Profile;
