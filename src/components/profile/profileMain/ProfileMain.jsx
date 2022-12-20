import React from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import NotesIcon from '@mui/icons-material/Notes';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { profileArr } from '../../../data/profile';

const ProfileMain = ({ nav }) => {
  return (
    <div className="profile__tools">
      {profileArr.map(el => (
        <div className="profile__tools-container" key={el.id} onClick={() => nav(`${el.img}`)}>
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
  );
};

export default ProfileMain;
