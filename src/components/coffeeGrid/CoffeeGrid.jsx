import React from 'react';
import Grid from '@mui/material/Grid';
import RecItem from '../mainPage/recomended/RecItem';

const CoffeeGrid = ({ discount, allList, itemId, shop = 'starbucks' }) => {
  return (
    <div className="details-main-list">
      <Grid container spacing={2}>
        {allList
          .find(el => el.id === itemId)
          .prods.map(el => (
            <Grid key={el.id} item xs={6}>
              <RecItem el={el} shop={shop} discount={discount} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default CoffeeGrid;
