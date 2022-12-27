import React from 'react';
import cup from '../../../img/coffeeCup.png';

const MainImg = ({ navigate }) => {
  return (
    <div className="container-img" onClick={() => navigate('/main/profile/rew')}>
      <img src={cup} alt="cup" className="container-img-cup" />
      <h2 className="container-img-line__start">
        GET <span>50%</span> AS A JOINING BONUS
      </h2>
      <span className="container-img-line__next">USE CODE ON CHECKOUT</span>
      <h2 className="container-img-line__close">COFFEENOW</h2>
    </div>
  );
};

export default MainImg;
