import React from 'react';
import { connect } from 'react-redux';
import Header from './header/Header';
import MainImg from './mainimg/MainImg';
import Recomended from './recomended/Recomended';
import PopularBrand from './popularBrand/PopularBrand';
import Shop from './shop/Shop';
import './mainPage.scss';

const MainPage = ({ myUser }) => {
  return (
    <div className="main-shop__page">
      <Header fullname={myUser.fullname} />
      <MainImg />
      <Recomended />
      <PopularBrand />
      <Shop />
    </div>
  );
};

const mapState = state => {
  return {
    myUser: state.usersList.user,
  };
};

export default connect(mapState)(MainPage);
