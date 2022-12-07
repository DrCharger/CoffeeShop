import React from 'react';
import { connect } from 'react-redux';
import './basket.scss';

const Basket = ({ item }) => {
  return <div>Basket</div>;
};

const mapState = state => {
  return {
    item: state.usersList.basket,
  };
};

export default connect(mapState)(Basket);
