import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import MainImg from '../mainimg/MainImg';
import Recomended from '../recomended/Recomended';
import PopularBrand from '../popularBrand/PopularBrand';
import Shop from '../shop/Shop';

const MainPage = ({ fullname, location, count, discount, orders }) => {
  const navigate = useNavigate();
  return (
    <>
      <Header fullname={fullname} loc={location} liked={count} navigate={navigate} />
      <MainImg navigate={navigate} />
      <Recomended forYou={orders} discount={discount} />
      <PopularBrand />
      <Shop />
    </>
  );
};

export default MainPage;
