import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Badge from '@mui/material/Badge';
import { style, styleAction } from '../../../data/style.js';

const Navbar = ({ order }) => {
  const [value, setValue] = useState('recents');
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={style} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeOutlinedIcon />}
        sx={styleAction}
        onClick={() => navigate('/main')}
      />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchOutlinedIcon />}
        sx={styleAction}
        onClick={() => navigate('search')}
      />

      <BottomNavigationAction
        label="Basket"
        value="Basket"
        icon={
          <Badge badgeContent={order.length} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        }
        sx={styleAction}
        onClick={() => navigate('/basket')}
      />

      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PersonOutlineIcon />}
        sx={styleAction}
        onClick={() => navigate('profile')}
      />
    </BottomNavigation>
  );
};

export default Navbar;
