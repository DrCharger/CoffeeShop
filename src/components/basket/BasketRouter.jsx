import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from '../checkout/Checkout';
import Basket from './Basket';
import { connect } from 'react-redux';
import { updateOrderInfo, updateUsersList } from '../../usersStore/users.actions';
import Final from '../final/Final';

const BasketRouter = ({ order, getNewOrder, myUser, finalOrder }) => {
  const [totalPrice, setTotal] = useState('0');

  return (
    <Routes>
      <Route
        path="/*"
        element={<Basket order={order} getNewOrder={getNewOrder} setTotal={setTotal} />}
      />
      <Route
        path="checkout"
        element={
          <Checkout order={order} myUser={myUser} totalPrice={totalPrice} ordering={getNewOrder} />
        }
      />
      <Route
        path="checkout/super"
        element={<Final myUser={myUser} getNewOrder={getNewOrder} finalOrder={finalOrder} />}
      />
    </Routes>
  );
};
const mapState = state => {
  return {
    order: state.usersList.order,
  };
};

const mapDispatch = {
  getNewOrder: updateOrderInfo,
  finalOrder: updateUsersList,
};

export default connect(mapState, mapDispatch)(BasketRouter);
