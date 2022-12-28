import { allList } from './recs';

export const reducer = arr =>
  arr.flat(3).reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
export const findMax = (object, objValue = object, valMax = Object.values(object)) =>
  Object.keys(object)[Object.values(objValue).indexOf(Math.max(...valMax))];

export const prods = allList.map(el => el.prods).flat();

export const finder = param =>
  allList.find(item => item.id === param.id).prods.find(el => el.url_name === param.coffee);

export const pricer = data =>
  data.map(item => Number(item.newPriceText) * item.counter).reduce((acc, el) => acc + el, 0);

export const changer = (array, id, quantity) =>
  array.map(el => {
    if (el.id === id) {
      el.counter = quantity;
    }
    return el;
  });
