import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import finalImg from '../../img/checkout/yeah.png';
import './final.scss';

const Final = ({ myUser, finalOrder, getNewOrder }) => {
  let navigate = useNavigate();

  useEffect(() => {
    finalOrder(myUser.id);
    getNewOrder([]);
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
      <button className="final-btn homer" onClick={() => navigate('/main')}>
        Back To Home
      </button>
    </div>
  );
};

export default Final;
