import React, { useEffect } from 'react';
import Raiting from './Raiting';
import finalImg from '../../img/checkout/yeah.png';
import './final.scss';

const Final = props => {
  useEffect(() => {
    props.finalOrder(props.myUser.id);
    props.getNewOrder([]);
    props.setDiscount(0);
  }, []);

  return (
    <div className="final">
      <figure className="final-img">
        <img src={finalImg} alt="congratulations" />
      </figure>
      <h2 className="final-header">Your Order has been accepted</h2>
      <p className="final-text">
        Your items has been placed and is on it is way to being processed
      </p>
      <Raiting updateRait={props.updateRait} email={props.myUser.email} />
      <button
        className="final-btn homer"
        onClick={() => {
          props.getRaiting();
          props.navigate('/main');
        }}
      >
        Back To Home
      </button>
    </div>
  );
};

export default Final;
