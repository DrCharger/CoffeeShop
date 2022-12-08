import React from 'react';
import { useParams } from 'react-router-dom';
import location from '../../../../img/Location.png';
import yellowStar from '../../../../img/shops/icons/star.png';
import deliver from '../../../../img/shops/icons/deliver.png';
import clock from '../../../../img/shops/icons/clock.png';
import classNames from 'classnames';

const ShopInfo = ({ info }) => {
  const { shop } = useParams();
  const { name, loc, way, rait, likes, deliv, delStart, delFinish } = info;
  return (
    <div className="shops__list-items__info">
      <div className={classNames('else', { 'shops__list-items__name': shop === undefined })}>
        {name} - {loc}
      </div>
      <div className={classNames({ 'shops__list-items__text': shop === undefined }, 'else-text')}>
        <img src={location} alt="logo" /> {way} km * <img src={yellowStar} alt="logo" /> {rait} (
        {likes})
      </div>
      <div className={classNames({ 'shops__list-items__text': shop === undefined }, 'else-text')}>
        <img src={deliver} alt="deliv" />$ {deliv}.00 * .
        <img src={clock} alt="clock" /> .{delStart}.00 - {delFinish}.00
      </div>
    </div>
  );
};

export default ShopInfo;
