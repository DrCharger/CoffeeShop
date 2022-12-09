import Modal from './modale/Modal';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './final.scss';

const Final = () => {
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <div className="final">
      <figure className="final-img">
        <img src="" alt="congratulations" />
      </figure>
      <h2 className="final-header">Your Order has been accepted</h2>
      <p className="final-text">
        Your items has been placed and is on it is way to being processed
      </p>
      <button
        className="final-btn timer"
        onClick={() => {
          setOpen(true);
        }}
      >
        Time to deliver
      </button>
      <button className="final-btn homer" onClick={() => navigate('/main')}>
        Back To Home
      </button>
      {open && <Modal setOpen={setOpen} />}
    </div>
  );
};

export default Final;
