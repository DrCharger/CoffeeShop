import {
  USERS_LIST_RECIEVED,
  SHOW_SPINNER,
  SELECTED_USER,
  COFFEE_LIST_ID,
  ORDER_LIST,
  UPDATE_ORDER_LIST,
  ORDERED,
} from './users.actions';

const initialState = {
  usersList: [],
  isFetching: false,
  user: '',
  coffeeId: '01',
  order: [
    {
      comment: '',
      counter: 1,
      id: 984919,
      level: 'Normal',
      shop: 'starbucks',
      myCoffee: {
        id: 'hot-04',
        img: '/src/img/Americano.png',
        price: '$ 4.00',
        text: 'Americano',
        url_name: 'americano',
      },
    },
  ],
  ordered: [],
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
    case ORDERED: {
      return {
        ...state,
        ordered: state.ordered.concat(action.payload.data),
      };
    }
    case UPDATE_ORDER_LIST:
      return {
        ...state,
        order: action.payload.order,
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
