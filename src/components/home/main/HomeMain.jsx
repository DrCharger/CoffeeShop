import React from 'react';
import { CoffeeSymbol } from '../../coffeeSymbol/CoffeeSymbol';
import coffee from '../../../img/coffee.png';
import './homemain.scss';
import classNames from 'classnames';

const HomeMain = ({ text }) => {
  const ruleNone = text === 'none';
  return (
    <div>
      <figure className={classNames('main-img', { animationUP: ruleNone })}>
        <img src={coffee} alt="coffee" />
      </figure>
      <CoffeeSymbol text={text} />
      <h1 className={classNames('main-text', { none: ruleNone })}>Coffee Now</h1>
    </div>
  );
};

export default HomeMain;
