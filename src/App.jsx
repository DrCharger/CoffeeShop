import React from 'react';
import HomeRouter from './components/home/HomeRouter';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#543820',
    },
  },
});

const a = 1;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <HomeRouter />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
