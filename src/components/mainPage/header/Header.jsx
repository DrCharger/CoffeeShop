import React from 'react';
import location from '../../../img/Location.png';
import heart from '../../../img/heart.png';
import time from '../../../img/time.png';

const Header = ({ fullname }) => {
  return (
    <div className="header">
      <div className="header-container">
        <span className="header-greeting">
          Hello, <span className="header-user__name">{fullname}</span>!
        </span>
        <span className="header-location">
          <img src={location} alt="location" /> Kyiv, Ukraine
        </span>
      </div>
      <div className="header-icons">
        <div className="header-icons-icon">
          <img src={time} alt="heart" />
        </div>
        <div className="header-icons-icon">
          <img src={heart} alt="heart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
