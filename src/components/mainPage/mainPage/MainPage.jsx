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
      <div className="help">
        <MainImg navigate={navigate} />
      </div>
      <Recomended forYou={orders} discount={discount} />
      <PopularBrand />
      <Shop />
    </>
  );
};

export default MainPage;
