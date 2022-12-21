import React from 'react';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { shops } from '../../data/shops';
import loc from '../../img/checkout/Location.png';
import deliv from '../../img/checkout/moped.png';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import './checkout.scss';
import Payment from '../profile/payment/Payment';

const Checkout = ({ order, totalPrice, ordering }) => {
  let navigate = useNavigate();

  const thisShop = shops.find(el => el.url === order[0].shop);

  const handleClick = () => {
    const ordered = order.map(el => el.myCoffee.text);
    const newOrder = {
      shop: thisShop.name,
      totalPrice: +thisShop.deliv + +totalPrice,
      orderedCoffee: [ordered],
    };
    ordering(newOrder);
    navigate('super');
  };

  return (
    <div className="checkout-relative">
      <section className="checkout">
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
            backgroundColor: 'gray',
          }}
          onClick={() => navigate(-1)}
        />
        <div className="checkout-header">
          <h4>
            {thisShop.name} - {thisShop.loc}
          </h4>
          <p>Distance from you: {thisShop.way} km</p>
        </div>
      </section>
      <div className="checkout-text">Delivery to:</div>
      <section className="checkout-delivery">
        <div className="checkout-delivery-container border">
          <img src={loc} alt="loc" />
          <p>
            <span>Kyiv, Ukraine</span>
            <br />
            <span>Kyiv, Obolon, street</span>
          </p>
          <ArrowForwardIosOutlinedIcon sx={{ color: 'grey' }} />
        </div>
        <div className="checkout-delivery-container bottom">
          <img src={deliv} alt="loc" />
          <p>Delivery</p>
          <span>Change Options</span>
        </div>
      </section>
      <div className="checkout-text">Order Summary:</div>
      <section className="checkout-summary">
        {order.map(item => (
          <div key={`${item.myCoffee.id}.${item.id}`} className="checkout-summary-child border">
            <figure className="basket-child-img">
              <img src={item.myCoffee.img} alt="logo" />
            </figure>
            <p className="checkout-summary-child__info">
              <span>{item.myCoffee.text}</span>
              <br />
              <span>{item.counter} items</span>
              <br />
              <span>Comments :{item.comment}</span>
            </p>
          </div>
        ))}
        <div className="checkout-summary-price">
          <div>
            <span>Subtotal</span>
            <span className="checkout-summary-price-text">$ {totalPrice}</span>
          </div>
          <div>
            <span>Delivery</span>
            <span>$ {thisShop.deliv}</span>
          </div>
        </div>
      </section>
      <div className="checkout-text">Payment Details:</div>
      <section className="checkout-payment">
        <div className="checkout-payment__cash">
          <LocalAtmIcon sx={{ color: 'orange', fontSize: '25px' }} />
          <Payment />
        </div>
        <div className="checkout-payment__total">Total: $ {+thisShop.deliv + +totalPrice}</div>
      </section>
      <button className="basket__order-btn margin" onClick={handleClick}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
