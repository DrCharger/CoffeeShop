import React from 'react';
import { SV } from './components/SV/SV';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SV />
    </Provider>
  );
};
export default App;
