import React from 'react';
import coffee from '../../img/coffee.png';
import './home.scss';
import { CoffeeSymbol } from '../coffeeSymbol/CoffeeSymbol';
import { Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import MainPage from '../mainPage/MainPage';
import DetailCoffee from '../detailCoffee/DetailCoffee';
import BasketRouter from '../basket/BasketRouter';
import { connect } from 'react-redux';

const Home = ({ myUser, order, location }) => {
  const [discount, setDiscount] = React.useState(0);

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
        <Route
          path="/main/*"
          element={
            <MainPage
              myUser={myUser}
              order={order}
              location={location}
              discount={discount}
              setDiscount={setDiscount}
            />
          }
        />
        <Route path={`/details/:shop/:id/:coffee`} element={<DetailCoffee discount={discount} />} />
        <Route
          path="/basket/*"
          element={<BasketRouter myUser={myUser} setDiscount={setDiscount} />}
        />
      </Routes>
    </div>
  );
};

const mapState = state => {
  return {
    myUser: state.usersList.user,
    order: state.usersList.order,
    location: state.usersList.location,
  };
};

export default connect(mapState)(Home);
