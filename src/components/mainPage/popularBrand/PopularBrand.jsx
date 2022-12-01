import React from 'react';
import { brands } from '../../../data/brands';
import './brands.scss';

const PopularBrand = () => {
  return (
    <div className="popular">
      <h4>Popular brand</h4>
      <ul className="popular__list">
        {brands.map(({ img, id }) => (
          <li key={id} className="popular__list-items">
            <img src={img} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBrand;
