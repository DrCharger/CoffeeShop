export const START = 'START';
export const USER__NAME = 'USER__NAME';

export const getStarted = () => {
  return {
    type: START,
  };
};

export const getUserName = value => {
  return {
    type: USER__NAME,
    payload: {
      value,
    },
  };
};
