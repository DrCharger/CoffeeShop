import React from 'react';
import { shops } from '../../../data/shops';
import location from '../../../img/Location.png';
import yellowStar from '../../../img/shops/icons/star.png';
import deliver from '../../../img/shops/icons/deliver.png';
import clock from '../../../img/shops/icons/clock.png';

import './shop.scss';
import classNames from 'classnames';

const Shop = () => {
  return (
    <div className="shops">
      <h4>Coffee Shop</h4>
      <ul className="shops__list">
        {shops.map(shop => (
          <li key={shop.id} className={classNames('shops__list-items', { last: shop.id === '04' })}>
            <div className="shops__list-items__logo">
              <img src={shop.img} alt="logo" />
            </div>
            <div className="shops__list-items__info">
              <div className="shops__list-items__name">
                {shop.name} - {shop.loc}
              </div>

              <div className="shops__list-items__text">
                <img src={location} alt="logo" />
                {shop.way} km * <img src={yellowStar} alt="logo" /> {shop.rait} ({shop.likes})
              </div>
              <div className="shops__list-items__text">
                <img src={deliver} alt="deliv" />$ {shop.deliv}.00 *
                <img src={clock} alt="clock" />
                {shop.delStart}.00 - {shop.delFinish}.00
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
