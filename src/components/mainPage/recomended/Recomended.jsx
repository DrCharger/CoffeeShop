import React from 'react';
import RecItem from './RecItem';
import Grid from '@mui/material/Grid';
import { recomended } from '../../../data/recs';
import { reducer, findMax, prods } from '../../../data/utilits';

const Recomended = ({ forYou, discount }) => {
  let recsArr = [];
  let objCoffeeItem = reducer(forYou.map(el => el.orderedCoffee));
  let maxItemShop = findMax(reducer(forYou.map(el => el.shop)));

  if (Object.keys(objCoffeeItem).length < 2) {
    recsArr = recomended;
    maxItemShop = 'starbucks';
  } else {
    const maxItemIndex = findMax(objCoffeeItem);
    const objAfterMax = Object.entries(objCoffeeItem).filter(el => !el.includes(maxItemIndex));
    const newRecsArr = Object.assign({}, objCoffeeItem);
    newRecsArr[maxItemIndex] = 0;
    const max2ItemIndex = findMax(
      objCoffeeItem,
      newRecsArr,
      objAfterMax.map(el => el[1]),
    );
    recsArr.push(
      prods.find(el => el.text === maxItemIndex),
      prods.find(el => el.text === max2ItemIndex),
    );
  }
  return (
    <section className="recomended">
      <h4 className="recomended-head">Recomended for you</h4>
      <div className="recomended-products">
        <Grid container spacing={2}>
          {recsArr.map(el => (
            <Grid key={el.id} item xs={6}>
              <RecItem discount={discount} el={el} shop={maxItemShop.toLowerCase()} />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Recomended;
