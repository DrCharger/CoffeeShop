import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import finalImg from '../../img/checkout/yeah.png';
import './final.scss';
import Raiting from './Raiting';

const Final = ({ myUser, finalOrder, getNewOrder, setDiscount }) => {
  let navigate = useNavigate();

  useEffect(() => {
    finalOrder(myUser.id);
    getNewOrder([]);
    setDiscount(0);
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
      <Raiting />
      <button className="final-btn homer" onClick={() => navigate('/main')}>
        Back To Home
      </button>
    </div>
  );
};

export default Final;
