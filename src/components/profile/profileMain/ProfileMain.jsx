import React from 'react';
import { profileArr } from '../../../data/profile';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import NotesIcon from '@mui/icons-material/Notes';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Button from '@mui/material/Button';

const ProfileMain = ({ nav, reset }) => {
  const handleClick = () => {
    reset();
    nav('/login');
  };
  return (
    <div className="profile__tools">
      {profileArr.map(el => (
        <div className="profile__tools-container" key={el.id} onClick={() => nav(`${el.img}`)}>
          <div className="profile__tools-container__bg">
            {el.img === 'pencil' && <BorderColorOutlinedIcon sx={{ fontSize: 20 }} />}
            {el.img === 'loc' && <RoomOutlinedIcon sx={{ fontSize: 20 }} />}
            {el.img === 'rew' && <DiscountOutlinedIcon sx={{ fontSize: 20 }} />}
            {el.img === 'set' && <SettingsIcon sx={{ fontSize: 20 }} />}
            {el.img === 'policy' && <NotesIcon sx={{ fontSize: 20 }} />}
            {el.img === 'about' && <InfoOutlinedIcon sx={{ fontSize: 20 }} />}
          </div>
          <span>{el.text}</span>
          <ArrowForwardIosOutlinedIcon sx={{ color: '#8D8D8D', fontSize: 15 }} />
        </div>
      ))}
      <Button
        variant="contained"
        sx={{ width: '100%', marginTop: '5%', backgroundColor: '#E4E4E4', color: '#FF8B8B' }}
        onClick={handleClick}
      >
        LOGOUT
      </Button>
    </div>
  );
};

export default ProfileMain;
