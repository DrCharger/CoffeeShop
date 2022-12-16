import {
  USERS_LIST_RECIEVED,
  SELECTED_USER,
  COFFEE_LIST_ID,
  ORDER_LIST,
  UPDATE_ORDER_LIST,
  FAVOURITES,
  MINUS_FAVOURITES,
} from './users.actions';

const initialState = {
  user: {
    fullname: 'test',
    id: '1',
    email: 'ad',
    number: 'test',
    password: 'ad',
    Orders: [],
    Favourites: [],
  },
  coffeeId: '01',
  order: [],
  usersList: [],
  liked: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_LIST:
      return {
        ...state,
        order: state.order.concat(action.payload.order),
      };
    case UPDATE_ORDER_LIST:
      return {
        ...state,
        order: action.payload.order,
      };
    case USERS_LIST_RECIEVED:
      return {
        ...state,
        usersList: action.payload.usersList,
      };
    case SELECTED_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case COFFEE_LIST_ID:
      return {
        ...state,
        coffeeId: action.payload.id,
      };
    case FAVOURITES:
      return {
        ...state,
        liked: state.liked.concat(action.payload.liked),
      };
    case MINUS_FAVOURITES:
      return {
        ...state,
        liked: state.liked.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default usersReducer;
