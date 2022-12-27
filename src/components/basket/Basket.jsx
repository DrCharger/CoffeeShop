import React, { useState } from 'react';
import SugarLevel from './SugarLevel';
import { changer, pricer } from '../../data/utilits';
import StyledButton from '../styled/StyledButton';
import './basket.scss';

const Basket = ({ order, getNewOrder, navigate }) => {
  const [orderEdited, setItemDelete] = useState(order);
  const itemPrice = pricer(orderEdited);

  const handleDelete = e => {
    const filtered = orderEdited.filter(el => el.id !== Number(e.target.dataset.id));
    setItemDelete(filtered);
    getNewOrder(filtered);
  };

  const onItemChange = (id, quantity, newLevel) => {
    getNewOrder(changer(orderEdited, id, quantity, newLevel));
  };

  return (
    <>
      <div className="basket">
        <div className="basket-first">
          <StyledButton navigate={navigate} />
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
            orderEdited.length === 0 ? null : navigate('checkout');
          }}
        >
          <div className="basket__order-btn__quantity">{orderEdited.length}</div>
          Go to Checkout
          <div className="basket__order-btn__price">$ {itemPrice}</div>
        </button>
      </div>
    </>
  );
};

export default Basket;
