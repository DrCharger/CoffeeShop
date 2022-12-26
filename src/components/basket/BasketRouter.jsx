import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from '../checkout/Checkout';
import Basket from './Basket';
import { connect } from 'react-redux';
import {
  setAllOrders,
  updateAdminRaiting,
  updateOrderInfo,
  updateRaiting,
  updateUsersList,
} from '../../usersStore/users.actions';
import Final from '../final/Final';

const BasketRouter = ({
  setAllOrders,
  setDiscount,
  order,
  getNewOrder,
  myUser,
  finalOrder,
  updateRait,
  getRaiting,
}) => {
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
          <Checkout
            setAllOrders={setAllOrders}
            order={order}
            myUser={myUser}
            totalPrice={totalPrice}
          />
        }
      />
      <Route
        path="checkout/super"
        element={
          <Final
            myUser={myUser}
            getNewOrder={getNewOrder}
            finalOrder={finalOrder}
            setDiscount={setDiscount}
            updateRait={updateRait}
            getRaiting={getRaiting}
          />
        }
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
  setAllOrders: setAllOrders,
  getRaiting: updateAdminRaiting,
  updateRait: updateRaiting,
};

export default connect(mapState, mapDispatch)(BasketRouter);
