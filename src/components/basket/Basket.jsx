import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SugarLevel from './SugarLevel';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import './basket.scss';

const Basket = ({ order, getNewOrder, setTotal }) => {
  let navigate = useNavigate();
  const [orderEdited, setItemDelete] = useState(order);

  let pricer = orderEdited
    .map(item => Number(item.newPriceText) * item.counter)
    .reduce((acc, el) => acc + el, 0);

  const handleDelete = e => {
    const filtered = orderEdited.filter(el => el.id !== Number(e.target.dataset.id));
    setItemDelete(filtered);
    getNewOrder(filtered);
  };

  const onItemChange = (id, quantity, newLevel) => {
    const changed = orderEdited.map(el => {
      if (el.id === id) {
        el.counter = quantity;
        el.level = newLevel;
      }
      return el;
    });

    getNewOrder(changed);
  };

  return (
    <>
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
        {orderEdited.map(item => (
          <div key={`${item.myCoffee.id}.${item.id}`} className="basket-child">
            <figure className="basket-child-img">
              <img src={item.myCoffee.img} alt="logo" />
            </figure>
            <div className="basket-child-description">
              <div>
                <h4>{item.myCoffee.text}</h4>
                <SugarLevel item={item} onItemChange={onItemChange} />
              </div>
              <div className="basket-child-edit" data-id={item.id} onClick={handleDelete}>
                Delete
              </div>
            </div>
          </div>
        ))}
        <button
          className="basket__order-btn"
          onClick={() => {
            orderEdited.length === 0 ? null : navigate('checkout'), setTotal(pricer);
          }}
        >
          <div className="basket__order-btn__quantity">{orderEdited.length}</div>
          Go to Checkout
          <div className="basket__order-btn__price">$ {pricer}</div>
        </button>
      </div>
    </>
  );
};

export default Basket;
