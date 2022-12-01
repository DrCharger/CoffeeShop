import React from 'react';
import location from '../../../../img/Location.png';
import yellowStar from '../../../../img/shops/icons/star.png';
import deliver from '../../../../img/shops/icons/deliver.png';
import clock from '../../../../img/shops/icons/clock.png';

const ShopInfo = ({ shop }) => {
  return (
    <div className="shops__list-items__info">
      <div className="shops__list-items__name">
        {shop.name} - {shop.loc}
      </div>
      <div className="shops__list-items__text">
        <img src={location} alt="logo" /> {shop.way} km * <img src={yellowStar} alt="logo" />{' '}
        {shop.rait} ({shop.likes})
      </div>
      <div className="shops__list-items__text">
        <img src={deliver} alt="deliv" />$ {shop.deliv}.00 * .
        <img src={clock} alt="clock" /> .{shop.delStart}.00 - {shop.delFinish}.00
      </div>
    </div>
  );
};

export default ShopInfo;
