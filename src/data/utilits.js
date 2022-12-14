import { allList } from './recs';

export const reducer = arr =>
  arr.flat().reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
export const findMax = (object, objValue = object, valMax = Object.values(object)) =>
  Object.keys(object)[Object.values(objValue).indexOf(Math.max(...valMax))];

export const reccomend = allList.map(el => el.prods).flat();
