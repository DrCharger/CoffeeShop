import React from 'react';
import like from '../../../img/Like.png';
import cart from '../../../img/korzina.png';
import { Link } from 'react-router-dom';

const RecItem = ({ el }) => {
  return (
    <figure key={el.id}>
      <img src={el.img} alt="cappuchino" className="figure-img" />
      <div className="flex-figure">
        <div>
          <figcaption className="recomended-products-text">{el.text}</figcaption>
          <figcaption className="recomended-products-price">{el.price}</figcaption>
        </div>
        <div className="recomended-products-cart">
          <img src={cart} alt="buy it" />
        </div>
      </div>
      <div className="recomended-products-heart">
        <img src={like} alt="Like-heart" />
      </div>
    </figure>
  );
};

export default RecItem;
