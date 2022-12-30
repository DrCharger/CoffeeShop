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
  ALL_ORDERS,
  RESET,
  UPDATE_RAIT,
  FIRST_TIME,
} from './users.actions';

const initialState = {
  user: {},
  coffeeId: '01',
  order: [],
  usersList: [],
  liked: [],
  location: {},
  payment: 'Cash',
  allOrders: [],
  rait: '',
  firstTime: true,
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
    case UPDATE_RAIT:
      return {
        ...state,
        rait: action.payload.rait,
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
    case ALL_ORDERS:
      return {
        ...state,
        allOrders: state.allOrders.concat(action.payload.orders),
      };
    case RESET:
      return {
        ...state,
        allOrders: [],
        liked: [],
      };
    case PAYMENT:
      return {
        ...state,
        payment: action.payload.method,
      };
    case FIRST_TIME: {
      return {
        ...state,
        firstTime: false,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
