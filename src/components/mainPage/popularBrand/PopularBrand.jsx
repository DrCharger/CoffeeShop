import React from 'react';
import { brands } from '../../../data/brands';
import './brands.scss';
import { Link } from 'react-router-dom';

const PopularBrand = () => {
  return (
    <div className="popular">
      <h4>Popular brand</h4>
      <ul className="popular__list">
        {brands.map(({ img, id, name }) => (
          <Link to={`shop/${name}`} key={id}>
            <li className="popular__list-items">
              <img src={img} alt="logo" />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PopularBrand;
