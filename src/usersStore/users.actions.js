import * as usersGateWays from './users.gateWays';
import { usersSelector } from './users.selectors';

export const USERS_LIST_RECIEVED = 'USERS_LIST_RECIEVED';
export const SELECTED_USER = 'SELECTED_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const COFFEE_LIST_ID = 'COFFEE_LIST_ID';
export const ORDER_LIST = 'ORDER_LIST';
export const UPDATE_ORDER_LIST = 'UPDATE_ORDER_LIST';
export const ORDERED = 'ORDERED';
export const FAVOURITES = 'FAVOURITES';
export const MINUS_FAVOURITES = 'MINUS_FAVOURITES';
export const UPDATE_ADRESS = 'UPDATE_ADRESS';
export const SET_ADRESS = 'SET_ADRESS';
export const PAYMENT = 'PAYMENT';
export const ALL_ORDERS = 'ALL_ORDERS';
export const RESET = 'RESET';
export const UPDATE_RAIT = 'UPDATE_RAIT';
export const FIRST_TIME = 'FIRST_TIME';

export const setUserInfo = user => {
  return {
    type: SELECTED_USER,
    payload: {
      user,
    },
  };
};

export const updateUserInfo = (updateName, toUpdate) => {
  return {
    type: UPDATE_USER,
    payload: {
      updateName,
      toUpdate,
    },
  };
};

export const setAdress = location => {
  return {
    type: SET_ADRESS,
    payload: {
      location,
    },
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};

export const setPayment = method => {
  return {
    type: PAYMENT,
    payload: {
      method,
    },
  };
};
export const setFirstTime = () => {
  return {
    type: FIRST_TIME,
  };
};

export const updateAdressInfo = (updateName, toUpdate) => {
  return {
    type: UPDATE_ADRESS,
    payload: {
      updateName,
      toUpdate,
    },
  };
};
export const setAllOrders = orders => {
  return {
    type: ALL_ORDERS,
    payload: {
      orders,
    },
  };
};

export const setFavourites = liked => {
  return {
    type: FAVOURITES,
    payload: {
      liked,
    },
  };
};

export const minusFavourites = id => {
  return {
    type: MINUS_FAVOURITES,
    payload: {
      id,
    },
  };
};

export const getOrderInfo = order => {
  return {
    type: ORDER_LIST,
    payload: {
      order,
    },
  };
};

export const updateOrderInfo = order => {
  return {
    type: UPDATE_ORDER_LIST,
    payload: {
      order,
    },
  };
};
export const updateRaiting = rait => {
  return {
    type: UPDATE_RAIT,
    payload: {
      rait,
    },
  };
};

export const getCoffeeListId = id => {
  return {
    type: COFFEE_LIST_ID,
    payload: {
      id,
    },
  };
};

export const usersListRecieved = usersList => {
  return {
    type: USERS_LIST_RECIEVED,
    payload: {
      usersList,
    },
  };
};

export const getUsersList = () => {
  const thunkAction = function (dispatch) {
    usersGateWays.fetchUsersList().then(userData => dispatch(usersListRecieved(userData)));
  };
  return thunkAction;
};

export const getMyUser = userId => {
  const thunkAction = function (dispatch) {
    usersGateWays.fetchUsersList().then(userData => {
      return dispatch(setUserInfo(userData.find(el => el.id === userId)));
    });
  };
  return thunkAction;
};

export const updateUsersList = userId => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const userList = state.usersList.usersList;
    const user = userList.find(user => user.id === userId);
    const updatedUser = {
      ...user,
      location: state.usersList.location,
      fullname: state.usersList.user.fullname,
      number: state.usersList.user.number,
      email: state.usersList.user.email,
      Orders: state.usersList.allOrders,
      favourites: state.usersList.liked,
    };
    usersGateWays.updateUser(userId, updatedUser).then(() => dispatch(getMyUser(userId)));
  };
  return thunkAction;
};

export const updateAdminRaiting = () => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const userList = state.usersList.usersList;
    const admin = userList.find(user => user.id === '1');
    const updatedUser = {
      ...admin,
      isItGood: admin.isItGood.concat(state.usersList.rait),
    };
    usersGateWays.updateUser('1', updatedUser);
  };
  return thunkAction;
};

export const createUsersList = user => {
  const thunkAction = function (dispatch) {
    if (user === '') {
      return null;
    }
    const newUser = {
      fullname: user.fullname,
      password: user.password,
      email: user.email,
      number: user.number,
      location: {},
    };
    usersGateWays.createUser(newUser).then(() => dispatch(getUsersList()));
  };
  return thunkAction;
};
