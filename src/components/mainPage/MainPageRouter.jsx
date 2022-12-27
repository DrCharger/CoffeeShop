import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import DetailShop from '../detailShop/DetailShop';
import Search from '../search/Search';
import ProfileRouter from '../profile/ProfileRouter';
import Favourites from '../favourites/Favourites';
import Orders from '../orders/Orders';
import './mainPage.scss';
import MainPage from './mainPage/MainPage';

const MainPageRouter = ({ myUser, order, location, discount, setDiscount, allOrders, liked }) => {
  return (
    <div className="main-shop__page">
      <Routes>
        <Route
          path="*"
          element={
            <MainPage
              fullname={myUser.fullname}
              location={location}
              discount={discount}
              count={liked.length}
              orders={myUser.Orders}
            />
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

export default MainPageRouter;
