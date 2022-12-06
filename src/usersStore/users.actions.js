import * as usersGateWays from './users.gateWays';
import { usersSelector } from './users.selectors';

export const USERS_LIST_RECIEVED = 'USERS_LIST_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const SELECTED_USER = 'SELECTED_USER';
export const COFFEE_LIST_ID = 'COFFEE_LIST_ID';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const setUserInfo = user => {
  return {
    type: SELECTED_USER,
    payload: {
      user,
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
    dispatch(showSpinner());
    usersGateWays.fetchUsersList().then(userData => dispatch(usersListRecieved(userData)));
  };
  return thunkAction;
};

// export const updateUsersList = userId => {
//   const thunkAction = function (dispatch, getState) {
//     dispatch(showSpinner());
//     const state = getState();
//     const userList = tasksSelector(state);
//     const user = userList.find(user => user.id === userId);
//     const updatedUser = { ...user, done: !user.done };

//     usersGateWays.updateUser(userId, updatedUser).then(() => dispatch(getUsersList()));
//   };
//   return thunkAction;
// };

export const deleteUsersList = userId => {
  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    usersGateWays.deleteUser(userId).then(() => dispatch(getUsersList()));
  };
  return thunkAction;
};

export const createUsersList = user => {
  const thunkAction = function (dispatch) {
    if (user === '') {
      return null;
    }
    dispatch(showSpinner());
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
