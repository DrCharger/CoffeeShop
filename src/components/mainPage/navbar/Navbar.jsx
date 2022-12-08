import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { style } from '../../../data/style.js';

const Navbar = () => {
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
        sx={{ color: '#fff' }}
        onClick={() => navigate('/main')}
      />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchOutlinedIcon />}
        sx={{ color: '#fff' }}
      />
      <BottomNavigationAction
        label="Basket"
        value="Basket"
        icon={<AssignmentTwoToneIcon />}
        sx={{ color: '#fff' }}
        onClick={() => navigate('basket')}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PersonOutlineIcon />}
        sx={{ color: '#fff' }}
      />
    </BottomNavigation>
  );
};

export default Navbar;
