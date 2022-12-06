import React from 'react';
import { connect } from 'react-redux';
import Header from './header/Header';
import MainImg from './mainimg/MainImg';
import Recomended from './recomended/Recomended';
import PopularBrand from './popularBrand/PopularBrand';
import Shop from './shop/Shop';
import './mainPage.scss';
import Navbar from './navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import DetailShop from '../detailShop/DetailShop';
import DetailCoffee from '../detailCoffee/DetailCoffee';

const MainPage = ({ myUser }) => {
  return (
    <div className="main-shop__page">
      <Navbar />
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header fullname={myUser.fullname} />
              <MainImg />
              <Recomended />
              <PopularBrand />
              <Shop />
            </>
          }
        />
        <Route path={`/shop/:id`} element={<DetailShop />} />
        <Route path={`/shop/:id/:coffee`} element={<DetailCoffee />} />
      </Routes>
    </div>
  );
};

const mapState = state => {
  return {
    myUser: state.usersList.user,
  };
};

export default connect(mapState)(MainPage);
