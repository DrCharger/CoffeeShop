import React from 'react';
import like from '../../../img/Like.png';
import cart from '../../../img/korzina.png';
import { recomended } from '../../../data/recs';

const Recomended = () => {
  return (
    <section className="recomended">
      <h4 className="recomended-head">Recomended for you</h4>
      <div className="recomended-products">
        {recomended.map(el => (
          <figure key={el.id}>
            <img src={el.img} alt="cappuchino" />
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
        ))}
      </div>
    </section>
  );
};

export default Recomended;
