import React from 'react';
import { connect } from 'react-redux';
import location from '../../img/Location.png';
import heart from '../../img/heart.png';
import time from '../../img/time.png';
import cup from '../../img/coffeeCup.png';
import like from '../../img/Like.png';
import cart from '../../img/korzina.png';
import { recomended } from '../../data/recs';
import './mainPage.scss';

const MainPage = ({ myUser }) => {
  return (
    <div className="main-shop__page">
      <div className="header">
        <div className="header-container">
          <span className="header-greeting">
            Hello, <span className="header-user__name">{myUser.fullname}</span>!
          </span>
          <span className="header-location">
            <img src={location} alt="location" /> Kyiv, Ukraine
          </span>
        </div>
        <div className="header-icons">
          <div className="header-icons-icon">
            <img src={time} alt="heart" />
          </div>
          <div className="header-icons-icon">
            <img src={heart} alt="heart" />
          </div>
        </div>
      </div>
      <div className="container-img">
        <img src={cup} alt="cup" className="container-img-cup" />
        <h2 className="container-img-line__start">
          GET <span>50%</span> AS A JOINING BONUS
        </h2>
        <span className="container-img-line__next">USE CODE ON CHECKOUT</span>
        <h2 className="container-img-line__close">COFFEENOW</h2>
      </div>
      <section className="recomended">
        <h4 className="recomended-head">Recomended for you</h4>
        <div className="recomended-products">
          {recomended.map(el => (
            <figure key={el.id}>
              <img src={el.img} alt="cappuchino" />
              <div className="flex-figure">
                <div>
                  <figcaption className="recomended-products-text">{el.text}</figcaption>
                  <figcaption className="recomended-products-price">{el.price}</figcaption>
                </div>
                <div className="recomended-products-cart">
                  <img src={cart} alt="buy it" />
                </div>
              </div>
              <div className="recomended-products-heart">
                <img src={like} alt="Like-heart" />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

const mapState = state => {
  return {
    myUser: state.usersList.user,
  };
};

export default connect(mapState)(MainPage);
