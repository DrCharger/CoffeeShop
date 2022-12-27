import React from 'react';

const CheckItem = ({ counter, comment, myCoffee }) => {
  return (
    <div className="checkout-summary-child border">
      <figure className="basket-child-img">
        <img src={myCoffee.img} alt="logo" />
      </figure>
      <p className="checkout-summary-child__info">
        <span>{myCoffee.text}</span>
        <br />
        <span>{counter} items</span>
        <br />
        <span>Comments :{comment}</span>
      </p>
    </div>
  );
};

export default CheckItem;
