import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { shops } from '../../data/shops';
import { Link } from 'react-router-dom';
import ShopInfo from '../mainPage/shop/info/ShopInfo';
import Grid from '@mui/material/Grid';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import { menu } from '../../data/menu';
import './details.scss';
import classNames from 'classnames';
import { allList } from '../../data/recs';
import RecItem from '../mainPage/recomended/RecItem';

const DetailShop = () => {
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
      <div className="details-main-list">
        <Grid container spacing={2}>
          {allList
            .find(el => el.id === menuId)
            .prods.map(el => (
              <Grid key={el.id} item xs={6}>
                <Link to={`/shop/${menuId}/${el.url_name}`}>
                  <RecItem el={el} />
                </Link>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default DetailShop;
