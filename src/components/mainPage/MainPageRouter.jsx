import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import DetailShop from '../detailShop/DetailShop';
import Search from '../search/Search';
import ProfileRouter from '../profile/ProfileRouter';
import Favourites from '../favourites/Favourites';
import Orders from '../orders/Orders';
import './mainPage.scss';
import MainPage from './mainPage/MainPage';
import { getItem } from '../../data/local';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../usersStore/users.actions';
import * as selectors from '../../usersStore/users.selectors';

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
  allInfo,
}) => {
  let navigate = useNavigate();

  useEffect(() => {
    debugger;
    console.log(allInfo);
    if (usersList.length === 0) {
      getUsers();
    }
    if (getItem('user') === null || getItem('user').location === undefined) {
      return navigate('/login');
    }
    setUser(getItem('user'));
    console.log(allInfo);

    setAdress(getItem('user').location);
    console.log(allInfo);

    setFavour(getItem('user').favourites);
    console.log(allInfo);

    setAllOrders(getItem('user').Orders);
    console.log(allInfo);
  }, []);
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
    allInfo: state.usersList,
  };
};

const mapDispatch = {
  setUser: actions.setUserInfo,
  setFavour: actions.setFavourites,
  setAdress: actions.setAdress,
  setAllOrders: actions.setAllOrders,
};

export default connect(mapState, mapDispatch)(MainPageRouter);
