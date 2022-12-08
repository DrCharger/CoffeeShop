import {
  USERS_LIST_RECIEVED,
  SHOW_SPINNER,
  SELECTED_USER,
  COFFEE_LIST_ID,
  ORDER_LIST,
} from './users.actions';

const initialState = {
  usersList: [],
  isFetching: false,
  user: '',
  coffeeId: '01',
  order: [
    {
      level: false,
      counter: 2,
      comment: '',
      myCoffee: { id: '01', text: 'test', price: '$ 5.32', img: '//' },
    },
    {
      level: false,
      counter: 2,
      comment: '',
      myCoffee: { id: '02', text: 'test', price: '$ 5.32', img: '//' },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case ORDER_LIST:
      return {
        ...state,
        order: state.order.concat(action.payload.order),
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
    case COFFEE_LIST_ID:
      return {
        ...state,
        coffeeId: action.payload.id,
      };
    default:
      return state;
  }
};

export default usersReducer;
