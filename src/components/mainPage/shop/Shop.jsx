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
          <Link to={`${shop.url}`} key={shop.id}>
            <ShopInfo info={shop} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
