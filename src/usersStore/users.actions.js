import * as usersGateWays from './users.gateWays';
import { usersSelector } from './users.selectors';

export const USERS_LIST_RECIEVED = 'USERS_LIST_RECIEVED';
export const SELECTED_USER = 'SELECTED_USER';
export const COFFEE_LIST_ID = 'COFFEE_LIST_ID';
export const ORDER_LIST = 'ORDER_LIST';
export const UPDATE_ORDER_LIST = 'UPDATE_ORDER_LIST';
export const ORDERED = 'ORDERED';
export const FAVOURITES = 'FAVOURITES';
export const FAVOURITES__MINUS = 'FAVOURITES__MINUS';

export const setUserInfo = user => {
  return {
    type: SELECTED_USER,
    payload: {
      user,
    },
  };
};

export const setFavourites = favor => {
  return {
    type: FAVOURITES,
    payload: {
      favor,
    },
  };
};

export const minusFavourites = id => {
  return {
    type: FAVOURITES__MINUS,
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
      console.log(userData);
      console.log(userId);
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
      Orders: user.Orders.concat(state.usersList.order),
      Favourites: user.Favourites.concat(state.usersList.favourite),
    };
    usersGateWays.updateUser(userId, updatedUser).then(() => dispatch(getMyUser(userId)));
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
    };
    usersGateWays.createUser(newUser).then(() => dispatch(getUsersList()));
  };
  return thunkAction;
};
