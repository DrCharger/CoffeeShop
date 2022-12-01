import React from 'react';
import { shops } from '../../../data/shops';
import { Link } from 'react-router-dom';
import './shop.scss';
import classNames from 'classnames';
import ShopInfo from './info/ShopInfo';

const Shop = () => {
  return (
    <div className="shops">
      <h4>Coffee Shop</h4>
      <ul className="shops__list">
        {shops.map(shop => (
          <Link to={`shop/${shop.url}`} key={shop.id}>
            <li className={classNames('shops__list-items', { last: shop.id === '06' })}>
              <div className="shops__list-items__logo">
                <img src={shop.img} alt="logo" />
              </div>
              <ShopInfo shop={shop} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
