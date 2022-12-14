import React from 'react';
import Badge from '@mui/material/Badge';
import location from '../../../img/Location.png';
import heart from '../../../img/heart.png';
import time from '../../../img/time.png';

const Header = ({ fullname, loc, liked, navigate }) => {
  return (
    <div className="header">
      <div className="header-container">
        <span className="header-greeting">
          Hello, <span className="header-user__name">{fullname}</span>!
        </span>
        <span className="header-location">
          <img src={location} alt="location" /> <b>{loc.country || 'Ukraine'}</b>,{' '}
          <b>{loc.city || 'Kiev'}</b>, <b>{loc.street || 'Street'}</b>,{' '}
          <b>{loc.house || 'House'}</b>
        </span>
      </div>
      <div className="header-icons">
        <div className="header-icons-icon" onClick={() => navigate('orders')}>
          <img src={time} alt="heart" />
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
