import React from 'react';
import { Link } from 'react-router-dom';
import ShopInfo from './info/ShopInfo';
import { shops } from '../../../data/shops';
import './shop.scss';

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
