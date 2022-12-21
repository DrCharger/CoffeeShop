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
import Search from '../search/Search';
import ProfileRouter from '../profile/ProfileRouter';

const MainPage = ({ myUser, order, location, discount, setDiscount }) => {
  return (
    <div className="main-shop__page">
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header fullname={myUser.fullname} loc={location} />
              <MainImg />
              <Recomended forYou={myUser.Orders} discount={discount} />
              <PopularBrand />
              <Shop />
            </>
          }
        />
        <Route path={`:shop`} element={<DetailShop discount={discount} />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/profile/*"
          element={<ProfileRouter myUser={myUser} setDiscount={setDiscount} />}
        />
      </Routes>
      <Navbar order={order} />
    </div>
  );
};

export default MainPage;
