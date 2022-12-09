import React from 'react';
import './modale.scss';

const Modal = ({ setOpen }) => {
  return (
    <div className="modale">
      <button className="modale-btn" onClick={() => setOpen(false)}>
        X
      </button>
      <div></div>
    </div>
  );
};

export default Modal;
