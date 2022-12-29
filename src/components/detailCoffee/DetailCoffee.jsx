import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StyledButton from '../styled/StyledButton';
import StyledSnackbar from '../styled/StyledSnackbar';
import { finder } from '../../data/utilits';
import { sugarLevel } from '../../data/sugarLevel.js';
import './detailsCoffee.scss';

const DetailCoffee = ({ getOrder, discount, order, updateOrderInfo }) => {
  let navigate = useNavigate();
  let params = useParams();
  const [level, setLevel] = useState('Normal');
  const [counter, setCounter] = useState(1);
  const [comment, setComment] = useState('');
  const [open, setOpen] = useState(false);
  const myCoffee = finder(params);
  let newPriceText;
  const { text, price, img, dop, dopPlus } = myCoffee;
  discount !== 0 ? (newPriceText = (price * (1 - discount)).toFixed(2)) : (newPriceText = price);
  level === 'More' ? (newPriceText = (+newPriceText + +dopPlus).toFixed(2)) : newPriceText;

  const toTheBasket = () => {
    let included = order.find(
      item => item.myCoffee.id.includes(myCoffee.id) && item.level.includes(level),
    );
    if (included === undefined) {
      const toBasket = {
        shop: params.shop,
        level,
        dop,
        counter,
        comment,
        myCoffee,
        newPriceText,
        id: Math.floor(Math.random() * 1000000),
      };
      getOrder(toBasket);
    } else {
      const newOrder = order.map(el =>
        el.myCoffee.id === myCoffee.id && el.level === level
          ? { ...el, counter: el.counter + counter }
          : el,
      );
      updateOrderInfo(newOrder);
    }

    setOpen(true);
  };

  return (
    <div className="details-main">
      <div className="details-main__img">
        <img src={img} alt="logo" className="details-main__img-url" />
        <div>
          <StyledButton navigate={navigate} />
        </div>
      </div>
      <div className="details-coffee">
        <div className="details-coffee-container">
          <h3 className="details-coffee-header">{text}</h3>
          <h5>{text}</h5>
        </div>
        <div className="details-coffee-price">$ {newPriceText}</div>
      </div>
      <div className="details-sugar">
        <h3 className="details-sugar__text">
          {dop}
          <span>(price: ${dopPlus})</span>
        </h3>
        {sugarLevel.map(el => (
          <div className="details-sugar-container" key={el}>
            <span>{el}</span>
            <input type="radio" checked={level === el} onChange={() => setLevel(el)} />
          </div>
        ))}
      </div>
      <div className="details-description">
        <h3 className="details-sugar__text">Special Instructions</h3>
        <textarea
          className="details-description__area"
          name="details"
          id="1"
          placeholder="E.g. Delivery time"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <div className="details-description__counter">
          <button
            className="details-description__counter-btn"
            onClick={() => {
              counter <= 1 ? null : setCounter(counter - 1);
            }}
          >
            -
          </button>
          <span className="details-description__counter-text">{counter}</span>
          <button
            className="details-description__counter-btn"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
        </div>
        <button className="details-description__order-btn" onClick={toTheBasket}>
          ADD TO BUSKET
        </button>
        <StyledSnackbar open={open} setOpen={setOpen} counter={counter} />
      </div>
    </div>
  );
};

export default DetailCoffee;
