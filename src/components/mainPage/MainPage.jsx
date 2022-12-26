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
import Favourites from '../favourites/Favourites';
import Orders from '../orders/Orders';

const MainPage = ({ myUser, order, location, discount, setDiscount, allOrders, liked }) => {
  return (
    <div className="main-shop__page">
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header fullname={myUser.fullname} loc={location} liked={liked.length} />
              <MainImg />
              <Recomended forYou={myUser.Orders} discount={discount} />
              <PopularBrand />
              <Shop />
            </>
          }
        />
        <Route path={`:shop`} element={<DetailShop discount={discount} />} />
        <Route path="/search" element={<Search discount={discount} />} />
        <Route
          path="/profile/*"
          element={<ProfileRouter myUser={myUser} setDiscount={setDiscount} />}
        />
        <Route path="/favourites" element={<Favourites liked={liked} />} />
        <Route path="/orders" element={<Orders allOrders={allOrders} />} />
      </Routes>
      <Navbar order={order} />
    </div>
  );
};

export default MainPage;
