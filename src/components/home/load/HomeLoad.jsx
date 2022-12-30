import React, { useEffect } from 'react';
import { getItem } from '../../../data/local';
import { findUser } from '../../../data/utilits';
import { useNavigate } from 'react-router-dom';
import HomeMain from '../main/HomeMain';

const HomeLoad = ({ users }) => {
  let navigate = useNavigate();
  const finded = findUser(users, getItem('email'), getItem('password'));

  if (finded !== undefined) {
    useEffect(() => {
      setTimeout(() => navigate('/main'), 2000);
    }, []);
  } else {
    useEffect(() => {
      setTimeout(() => navigate('/login'), 2000);
    }, []);
  }

  return <HomeMain text="none" />;
};

export default HomeLoad;
