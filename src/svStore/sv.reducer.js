import { START, USER__NAME } from './sv.actions';

const initialState = {
  start: false,
  userName: '',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        start: true,
      };
    case USER__NAME:
      return {
        ...state,
        userName: action.payload.value,
      };
    default:
      return state;
  }
};

export default gameReducer;
