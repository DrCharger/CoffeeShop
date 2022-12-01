import { Button } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { shops } from '../../data/shops';
import { Link } from 'react-router-dom';
import ShopInfo from '../mainPage/shop/info/ShopInfo';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import './details.scss';

const DetailShop = () => {
  const { id } = useParams();

  const myShop = shops.find(({ url }) => url === id);
  console.log(myShop);
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
    </div>
  );
};

export default DetailShop;
