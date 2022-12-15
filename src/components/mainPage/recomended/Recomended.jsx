import React from 'react';
import RecItem from './RecItem';
import { recomended } from '../../../data/recs';
import { reducer, findMax, reccomend } from '../../../data/utilits';

const Recomended = ({ forYou }) => {
  let recsArr = [];
  let objCoffeeItem = reducer(forYou.map(el => el.orderedCoffee));
  let maxCountShop = findMax(reducer(forYou.map(el => el.shop)));
  if (Object.keys(objCoffeeItem).length < 2) {
    recsArr = recomended;
    maxCountShop = 'starbucks';
  } else {
    const max = findMax(objCoffeeItem);
    const objAfterMax = Object.entries(objCoffeeItem).filter(el => !el.includes(max));
    const newA = Object.assign({}, objCoffeeItem);
    newA[max] = 0;
    const max2 = findMax(
      objCoffeeItem,
      newA,
      objAfterMax.map(el => el[1]),
    );
    recsArr.push(
      reccomend.find(el => el.text === max),
      reccomend.find(el => el.text === max2),
    );
  }

  return (
    <section className="recomended">
      <h4 className="recomended-head">Recomended for you</h4>
      <div className="recomended-products">
        {recsArr.map(el => (
          <RecItem
            key={el.id}
            el={el}
            shop={maxCountShop.toLowerCase()}
            menuId={'01'}
            url={el.url_name}
          />
        ))}
      </div>
    </section>
  );
};

export default Recomended;
