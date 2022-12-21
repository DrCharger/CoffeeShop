import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { shops } from '../../data/shops';
import ShopInfo from '../mainPage/shop/info/ShopInfo';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import { menu } from '../../data/menu';
import './details.scss';
import classNames from 'classnames';
import { allList } from '../../data/recs';
import CoffeeGrid from '../coffeeGrid/CoffeeGrid';

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
          <Button
            variant="contained"
            startIcon={<ArrowBackIosNewTwoToneIcon />}
            sx={{
              color: '#543820',
              borderRadius: '50%',
              minWidth: 35,
              height: 35,
              padding: 0,
              marginLeft: '5%',
              opacity: 0.7,
              paddingLeft: '9px',
            }}
            onClick={() => navigate(-1)}
          />
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
