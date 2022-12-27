import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../usersStore/users.actions';
import { locationSelector, orderSelector } from '../../usersStore/users.selectors';
import Basket from './Basket';
import Checkout from '../checkout/Checkout';
import Final from '../final/Final';

const BasketRouter = props => {
  const [totalPrice, setTotal] = useState('0');
  let navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Basket
            navigate={navigate}
            order={props.order}
            getNewOrder={props.getNewOrder}
            setTotal={setTotal}
          />
        }
      />
      <Route
        path="checkout"
        element={
          <Checkout
            setAllOrders={props.setAllOrders}
            order={props.order}
            myUser={props.myUser}
            totalPrice={totalPrice}
            navigate={navigate}
            location={props.location}
          />
        }
      />
      <Route
        path="checkout/super"
        element={
          <Final
            myUser={props.myUser}
            getNewOrder={props.getNewOrder}
            finalOrder={props.finalOrder}
            setDiscount={props.setDiscount}
            updateRait={props.updateRait}
            getRaiting={props.getRaiting}
            navigate={navigate}
          />
        }
      />
    </Routes>
  );
};
const mapState = state => {
  return {
    order: orderSelector(state),
    location: locationSelector(state),
  };
};

const mapDispatch = {
  getNewOrder: actions.updateOrderInfo,
  finalOrder: actions.updateUsersList,
  setAllOrders: actions.setAllOrders,
  getRaiting: actions.updateAdminRaiting,
  updateRait: actions.updateRaiting,
};

export default connect(mapState, mapDispatch)(BasketRouter);
