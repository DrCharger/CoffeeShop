import React from 'react';
import Grid from '@mui/material/Grid';
import './orders.scss';
import { shops } from '../../data/shops';
import StyledButton from '../styled/StyledButton';
import { useNavigate } from 'react-router-dom';

const Orders = ({ allOrders }) => {
  const navigate = useNavigate();
  return (
    <div className="orders">
      <div className="orders-container">
        <StyledButton navigate={navigate} />
        <h2 className="orders__header">Orders</h2>
      </div>
      <Grid container spacing={2}>
        {allOrders.map(el => (
          <Grid key={el.time} item xs={12}>
            <div className="orders-box">
              <img
                src={shops.find(brand => brand.name.toLowerCase() === el.shop.toLowerCase()).img}
                alt="logo"
              />
              <div className="orders-header">
                <span>
                  Shop: <strong>{el.shop}</strong>
                </span>
                <span>
                  Order: <strong>{el.orderedCoffee.join(', ')}</strong>
                </span>
                <span>
                  TotalPrice: <strong>$ {el.totalPrice}</strong>
                </span>
                <span>
                  Date: <strong>{el.time}</strong>
                </span>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Orders;
