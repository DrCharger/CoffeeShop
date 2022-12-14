import {
  USERS_LIST_RECIEVED,
  SELECTED_USER,
  COFFEE_LIST_ID,
  ORDER_LIST,
  UPDATE_ORDER_LIST,
  FAVOURITES,
  FAVOURITES__MINUS,
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
  favourite: [],
  usersList: [],
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
        favourite: state.favourite.concat(action.payload.favor),
      };
    case FAVOURITES__MINUS:
      return {
        ...state,
        favourite: state.favourite.filter(el => el.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default usersReducer;
