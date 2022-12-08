import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';

import './basket.scss';

const Basket = ({ order }) => {
  console.log(order);
  let navigate = useNavigate();

  return (
    <div className="basket">
      <div className="basket-first">
        <Button
          variant="contained"
          startIcon={<ArrowBackIosNewTwoToneIcon />}
          sx={{
            color: '#543820',
            borderRadius: '50%',
            minWidth: 35,
            height: 35,
            padding: 0,
            opacity: 0.7,
            paddingLeft: '9px',
          }}
          onClick={() => navigate(-1)}
        />
        <h4 className="basket-header">My Basket</h4>
      </div>
      {order.map(item => (
        <div key={item.myCoffee.id} className="basket-child">
          <figure className="basket-child-img">
            <img src={item.myCoffee.img} alt="logo" />
          </figure>
          <div className="basket-child-description">
            <h4>{item.myCoffee.text}</h4>
          </div>
        </div>
      ))}
      <button className="basket__order-btn">ORDER</button>
    </div>
  );
};

const mapState = state => {
  return {
    order: state.usersList.order,
  };
};

export default connect(mapState)(Basket);
