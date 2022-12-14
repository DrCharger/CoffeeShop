import React from 'react';
import Header from './header/Header';
import MainImg from './mainimg/MainImg';
import Recomended from './recomended/Recomended';
import PopularBrand from './popularBrand/PopularBrand';
import Shop from './shop/Shop';
import './mainPage.scss';
import Navbar from './navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import DetailShop from '../detailShop/DetailShop';

const MainPage = ({ myUser, order }) => {
  return (
    <div className="main-shop__page">
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header fullname={myUser.fullname} />
              <MainImg />
              <Recomended forYou={myUser.Orders} />
              <PopularBrand />
              <Shop />
            </>
          }
        />
        <Route path={`:shop`} element={<DetailShop />} />
      </Routes>
      <Navbar order={order} />
    </div>
  );
};

export default MainPage;
