import { USERS_LIST_RECIEVED, SHOW_SPINNER, SELECTED_USER } from './users.actions';

const initialState = {
  usersList: [],
  isFetching: false,
  user: '',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case USERS_LIST_RECIEVED:
      return {
        ...state,
        usersList: action.payload.usersList,
        isFetching: false,
      };
    case SELECTED_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default usersReducer;
