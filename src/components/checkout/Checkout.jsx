import React, { useState } from 'react';
import moment from 'moment/moment';
import StyledButton from '../styled/StyledButton';
import Payment from '../profile/payment/Payment';
import CheckItem from './CheckItem';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { shops } from '../../data/shops';
import { pricer } from '../../data/utilits';
import { deliveryType } from '../../data/delivery';
import loc from '../../img/checkout/Location.png';
import './checkout.scss';

const Checkout = ({ location, setAllOrders, order, navigate, payment }) => {
  const itemPrice = pricer(order);
  const [click, setClick] = useState(0);
  const thisShop = shops.find(el => el.url.toLowerCase() === order[0].shop.toLowerCase());
  let delivPrice = thisShop.deliv.toFixed(2);

  const handleClick = () => {
    const ordered = order.map(el => el.myCoffee.text);
    const newOrder = {
      shop: thisShop.name,
      time: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
      itemPrice: +thisShop.deliv + +itemPrice,
      orderedCoffee: [ordered],
      delivery: deliveryType[click].text,
      payment: payment,
    };
    setAllOrders(newOrder);
    navigate('checkout/super');
  };

  if (
    deliveryType[click].text === 'Pick it myself' ||
    deliveryType[click].text === 'In restorant'
  ) {
    delivPrice = (0).toFixed(2);
  }
  return (
    <div className="checkout-relative">
      <section className="checkout">
        <StyledButton navigate={navigate} />
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
            <span>
              {location.city || 'City'}, {location.country || 'Ukraine'}
            </span>
            <br />
            <span>
              {location.city || 'City'}, {location.street || 'street'}, {location.house || 'house'}
            </span>
          </p>
          <ArrowForwardIosOutlinedIcon
            sx={{ color: 'grey' }}
            onClick={() => navigate('/main/profile/loc')}
          />
        </div>
        <div className="checkout-delivery-container bottom">
          {deliveryType[click].img}
          <p>{deliveryType[click].text}</p>
          <span
            onClick={() => (click === deliveryType.length - 1 ? setClick(0) : setClick(click + 1))}
          >
            Change Options
          </span>
        </div>
      </section>
      <div className="checkout-text">Order Summary:</div>
      <section className="checkout-summary">
        {order.map(({ counter, comment, myCoffee, id }) => (
          <CheckItem
            key={`${myCoffee.id}.${id}`}
            counter={counter}
            comment={comment}
            myCoffee={myCoffee}
          />
        ))}
        <div className="checkout-summary-price">
          <div>
            <span>Subtotal</span>
            <span className="checkout-summary-price-text">$ {itemPrice.toFixed(2)}</span>
          </div>
          <div>
            <span>Delivery</span>
            <span>$ {delivPrice}</span>
          </div>
        </div>
      </section>
      <div className="checkout-text">Payment Details:</div>
      <section className="checkout-payment">
        <div className="checkout-payment__cash">
          <LocalAtmIcon sx={{ color: 'orange', fontSize: '25px' }} />
          <Payment />
          <KeyboardArrowDownIcon />
        </div>
        <div className="checkout-payment__total">
          Total: $ {(+delivPrice + +itemPrice).toFixed(2)}
        </div>
      </section>
      <button className="basket__order-btn margin" onClick={handleClick}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
