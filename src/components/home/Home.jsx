import React from 'react';
import coffee from '../../img/coffee.png';
import './home.scss';
import { CoffeeSymbol } from '../coffeeSymbol/CoffeeSymbol';
import { Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import MainPage from '../mainPage/MainPage';
import DetailCoffee from '../detailCoffee/DetailCoffee';

export const Home = () => {
  return (
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <figure className="main-img">
                <img src={coffee} alt="coffee" />
              </figure>
              <CoffeeSymbol text="home" />
              <h1 className="main-text">Coffee Now</h1>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/main/*" element={<MainPage />} />
        <Route path={`/shop/:id/:coffee`} element={<DetailCoffee />} />
      </Routes>
    </div>
  );
};
