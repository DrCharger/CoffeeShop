import {
  USERS_LIST_RECIEVED,
  SELECTED_USER,
  COFFEE_LIST_ID,
  ORDER_LIST,
  UPDATE_ORDER_LIST,
  FAVOURITES,
  MINUS_FAVOURITES,
  UPDATE_USER,
  UPDATE_ADRESS,
  PAYMENT,
  SET_ADRESS,
} from './users.actions';

const initialState = {
  user: {
    fullname: 'Adam Dor',
    id: '1',
    email: 'ad@example.com',
    number: '380934651111',
    password: 'ad',
    Orders: [],
    favourites: [],
  },
  coffeeId: '01',
  order: [],
  usersList: [],
  liked: [],
  location: {
    country: 'Ukraine',
    city: 'Kiev',
    street: 'Obolonska',
    house: '17B',
  },
  payment: 'Cash',
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
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, [action.payload.updateName]: action.payload.toUpdate },
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
    case SET_ADRESS:
      return {
        ...state,
        location: action.payload.location,
      };
    case UPDATE_ADRESS:
      return {
        ...state,
        location: { ...state.location, [action.payload.updateName]: action.payload.toUpdate },
      };
    case PAYMENT:
      return {
        ...state,
        payment: action.payload.method,
      };
    default:
      return state;
  }
};

export default usersReducer;
