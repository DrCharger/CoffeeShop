import React from 'react';
import { useParams } from 'react-router-dom';
import location from '../../../../img/Location.png';
import yellowStar from '../../../../img/shops/icons/star.png';
import deliver from '../../../../img/shops/icons/deliver.png';
import clock from '../../../../img/shops/icons/clock.png';
import classNames from 'classnames';

const ShopInfo = ({ shop }) => {
  const { id } = useParams();

  return (
    <div className="shops__list-items__info">
      <div className={classNames('else', { 'shops__list-items__name': id === undefined })}>
        {shop.name} - {shop.loc}
      </div>
      <div className={classNames({ 'shops__list-items__text': id === undefined }, 'else-text')}>
        <img src={location} alt="logo" /> {shop.way} km * <img src={yellowStar} alt="logo" />{' '}
        {shop.rait} ({shop.likes})
      </div>
      <div className={classNames({ 'shops__list-items__text': id === undefined }, 'else-text')}>
        <img src={deliver} alt="deliv" />$ {shop.deliv}.00 * .
        <img src={clock} alt="clock" /> .{shop.delStart}.00 - {shop.delFinish}.00
      </div>
    </div>
  );
};

export default ShopInfo;
