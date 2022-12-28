import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CoffeeSymbol } from '../coffeeSymbol/CoffeeSymbol';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import MainPageRouter from '../mainPage/MainPageRouter';
import DetailCoffee from '../detailCoffee/DetailCoffee';
import BasketRouter from '../basket/BasketRouter';
import { connect } from 'react-redux';
import coffee from '../../img/coffee.png';
import * as selectors from '../../usersStore/users.selectors';
import './home.scss';
import { getOrderInfo, updateOrderInfo } from '../../usersStore/users.actions';

const Home = ({ getOrder, myUser, order, location, allOrders, liked, updateOrderInfo }) => {
  const [discount, setDiscount] = useState(0);

  return (
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <figure className="main-img">
                <img src={coffee} alt="coffee" />
              </figure>
              <CoffeeSymbol text="home" />
              <h1 className="main-text">Coffee Now</h1>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/main/*"
          element={
            <MainPageRouter
              myUser={myUser}
              order={order}
              location={location}
              discount={discount}
              setDiscount={setDiscount}
              allOrders={allOrders}
              liked={liked}
            />
          }
        />
        <Route
          path={`/details/:shop/:id/:coffee`}
          element={
            <DetailCoffee
              discount={discount}
              getOrder={getOrder}
              order={order}
              updateOrderInfo={updateOrderInfo}
            />
          }
        />
        <Route
          path="/basket/*"
          element={<BasketRouter myUser={myUser} setDiscount={setDiscount} />}
        />
      </Routes>
    </div>
  );
};

const mapState = state => {
  return {
    myUser: selectors.userSelector(state),
    order: selectors.orderSelector(state),
    location: selectors.locationSelector(state),
    allOrders: selectors.allOrdersSelector(state),
    liked: selectors.likedSelector(state),
  };
};

const mapDispatch = {
  getOrder: getOrderInfo,
  updateOrderInfo: updateOrderInfo,
};

export default connect(mapState, mapDispatch)(Home);
