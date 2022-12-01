import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { shops } from '../../data/shops';
import { Link } from 'react-router-dom';
import ShopInfo from '../mainPage/shop/info/ShopInfo';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import { menu } from '../../data/menu';
import './details.scss';
import classNames from 'classnames';

const DetailShop = () => {
  const [menuId, setMenuId] = useState('01');
  const { id } = useParams();

  const myShop = shops.find(({ url }) => url === id);
  console.log(menuId);
  return (
    <div className="details-main">
      <div className="details-main__img">
        <img src={myShop.bigImg} alt="logo" className="details-main__img-url" />
        <Link to={'/main'}>
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
            }}
          />
        </Link>
        <div className="details-main-info">
          <ShopInfo shop={myShop} />
        </div>
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
    </div>
  );
};

export default DetailShop;
