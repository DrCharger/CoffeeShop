import React from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import location from '../../../../img/Location.png';
import yellowStar from '../../../../img/shops/icons/star.png';
import deliver from '../../../../img/shops/icons/deliver.png';
import clock from '../../../../img/shops/icons/clock.png';

const ShopInfo = ({ info }) => {
  const { shop } = useParams();
  const { name, loc, way, rait, likes, deliv, delStart, delFinish, id, img } = info;
  return (
    <li
      className={classNames(
        'shops__list-items',
        { last: id === '06' && shop === undefined },
        { 'shops__list-InShop': shop !== undefined },
      )}
    >
      <div className="shops__list-items__logo">
        <img src={img} alt="logo" />
      </div>
      <div className="shops__list-items__info">
        <div className={classNames('else', { 'shops__list-items__name': shop === undefined })}>
          {name} - {loc}
        </div>
        <div className={classNames({ 'shops__list-items__text': shop === undefined }, 'else-text')}>
          <img src={location} alt="logo" /> <span>{way} km </span>{' '}
          <img src={yellowStar} alt="logo" />{' '}
          <span>
            {rait} ({likes})
          </span>
        </div>
        <div className={classNames({ 'shops__list-items__text': shop === undefined }, 'else-text')}>
          <img src={deliver} alt="deliv" />
          <span>$ {deliv}.00</span>
          <img src={clock} alt="clock" />
          <span>
            {delStart}.00 - {delFinish}.00
          </span>
        </div>
      </div>
    </li>
  );
};

export default ShopInfo;
