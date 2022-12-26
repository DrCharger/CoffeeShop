import React from 'react';
import { allList } from '../../data/recs';
import { shops } from '../../data/shops';
import { menu } from '../../data/menu';
import CoffeeGrid from '../coffeeGrid/CoffeeGrid';
import ShopInfo from '../mainPage/shop/info/ShopInfo';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchedItem = ({ param, discount }) => {
  let navigate = useNavigate();
  if (param === null) {
    return null;
  }
  const isMenu = menu.find(el => el.text.toLowerCase().includes(param.toLowerCase()));
  const isShop = shops.find(el => el.url.toLowerCase().includes(param.toLowerCase()));
  const isProd = allList
    .map(el => el.prods)
    .flat()
    .find(el => el.url_name.toLowerCase().includes(param.toLowerCase()));
  if (isMenu !== undefined) {
    return <CoffeeGrid allList={allList} itemId={isMenu.id} discount={discount} />;
  }
  if (isShop !== undefined) {
    return (
      <div>
        <Link to={`/main/${isShop.url}`}>
          <ShopInfo info={isShop} />
        </Link>
      </div>
    );
  }
  if (isProd !== undefined) {
    return (
      <div>
        <img
          src={isProd.img}
          alt=""
          onClick={() => navigate(`/details/starbucks/${isProd.parentId}/${isProd.url_name}`)}
        />
      </div>
    );
  }
};

export default SearchedItem;
