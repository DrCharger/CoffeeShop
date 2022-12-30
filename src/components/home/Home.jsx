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
import * as actions from '../../usersStore/users.actions';
import './home.scss';

const Home = props => {
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
        <Route path="/login" element={<Login users={props.users} getUsers={props.getUsers} />} />
        <Route path="/register" element={<Registration createUser={props.createUser} />} />
        <Route
          path="/main/*"
          element={
            <MainPageRouter
              order={props.order}
              discount={discount}
              setDiscount={setDiscount}
              myUser={props.myUser}
              getUsers={props.getUsers}
            />
          }
        />
        <Route
          path={`/details/:shop/:id/:coffee`}
          element={
            <DetailCoffee
              discount={discount}
              getOrder={props.getOrder}
              order={props.order}
              updateOrderInfo={props.updateOrderInfo}
            />
          }
        />
        <Route
          path="/basket/*"
          element={<BasketRouter myUser={props.myUser} setDiscount={setDiscount} />}
        />
      </Routes>
    </div>
  );
};

const mapState = state => {
  return {
    myUser: selectors.userSelector(state),
    order: selectors.orderSelector(state),
    users: selectors.allUsersSelector(state),
  };
};

const mapDispatch = {
  getOrder: actions.getOrderInfo,
  updateOrderInfo: actions.updateOrderInfo,
  getUsers: actions.getUsersList,
  createUser: actions.createUsersList,
};

export default connect(mapState, mapDispatch)(Home);
