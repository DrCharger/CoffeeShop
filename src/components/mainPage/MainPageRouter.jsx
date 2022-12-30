import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import DetailShop from '../detailShop/DetailShop';
import Search from '../search/Search';
import ProfileRouter from '../profile/ProfileRouter';
import Favourites from '../favourites/Favourites';
import Orders from '../orders/Orders';
import './mainPage.scss';
import MainPage from './mainPage/MainPage';
import { getItem } from '../../data/local';
import { connect } from 'react-redux';
import * as actions from '../../usersStore/users.actions';
import * as selectors from '../../usersStore/users.selectors';
import { findUser } from '../../data/utilits';

const MainPageRouter = ({
  myUser,
  order,
  location,
  discount,
  setDiscount,
  allOrders,
  liked,
  setUser,
  setAdress,
  setFavour,
  setAllOrders,
  getUsers,
  usersList,
  firstTime,
  setFirstTime,
}) => {
  const finded = findUser(usersList, getItem('email'), getItem('password'));

  useEffect(() => {
    if (usersList.length === 0) {
      getUsers();
    }
    if (finded !== undefined && firstTime) {
      console.log('render');
      setUser(finded);
      setAdress(finded.location);
      setFavour(finded.favourites);
      setAllOrders(finded.Orders);
      setFirstTime();
    }
  }, [finded]);
  if (myUser.location === undefined) {
    return null;
  }
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

const mapState = state => {
  return {
    location: selectors.locationSelector(state),
    allOrders: selectors.allOrdersSelector(state),
    liked: selectors.likedSelector(state),
    usersList: selectors.allUsersSelector(state),
    firstTime: selectors.firstTimeSelector(state),
  };
};

const mapDispatch = {
  setUser: actions.setUserInfo,
  setFavour: actions.setFavourites,
  setAdress: actions.setAdress,
  setAllOrders: actions.setAllOrders,
  setFirstTime: actions.setFirstTime,
};

export default connect(mapState, mapDispatch)(MainPageRouter);
