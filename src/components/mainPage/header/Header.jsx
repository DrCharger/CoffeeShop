import React from 'react';
import location from '../../../img/Location.png';
import heart from '../../../img/heart.png';
import time from '../../../img/time.png';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';

const Header = ({ fullname, loc, orders, liked }) => {
  let navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-container">
        <span className="header-greeting">
          Hello, <span className="header-user__name">{fullname}</span>!
        </span>
        <span className="header-location">
          <img src={location} alt="location" /> <b>{loc.country}</b>, <b>{loc.city}</b>,{' '}
          <b>{loc.street}</b>, <b>{loc.house}</b>
        </span>
      </div>
      <div className="header-icons">
        <div className="header-icons-icon" onClick={() => navigate('orders')}>
          <Badge badgeContent={orders} color="error">
            <img src={time} alt="heart" />
          </Badge>
        </div>
        <div className="header-icons-icon" onClick={() => navigate('favourites')}>
          <Badge badgeContent={liked} color="error">
            <img src={heart} alt="heart" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
