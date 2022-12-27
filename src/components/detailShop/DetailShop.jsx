import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import CoffeeGrid from '../coffeeGrid/CoffeeGrid';
import StyledButton from '../styled/StyledButton';
import ShopInfo from '../mainPage/shop/info/ShopInfo';
import { shops } from '../../data/shops';
import { menu } from '../../data/menu';
import { allList } from '../../data/recs';
import './details.scss';

const DetailShop = ({ discount }) => {
  const [menuId, setMenuId] = useState('01');
  const { shop } = useParams();
  let navigate = useNavigate();

  const myShop = shops.find(({ url }) => url === shop);

  return (
    <div className="details-main">
      <div className="details-main__img">
        <img src={myShop.bigImg} alt="logo" className="details-main__img-url" />
        <div>
          <StyledButton navigate={navigate} />
        </div>
      </div>{' '}
      <div className="details-main-info">
        <ShopInfo info={myShop} />
      </div>
      <div className="details-main-menu">
        {menu.map(el => (
          <button
            key={el.id}
            className={classNames('details-main-menu-btn', { active: el.id === menuId })}
            onClick={() => setMenuId(el.id)}
          >
            {el.text}
          </button>
        ))}
      </div>
      <CoffeeGrid allList={allList} itemId={menuId} shop={shop} discount={discount} />
    </div>
  );
};

export default DetailShop;
