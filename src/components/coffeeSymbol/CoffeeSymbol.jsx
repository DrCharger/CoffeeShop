import React from 'react';
import zerno from '../../img/zerno.png';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './symbol.scss';

export const CoffeeSymbol = ({ text }) => {
  const ruleHome = text === 'home';
  const ruleFlex = text === 'flex';
  const ruleNone = text === 'none';
  return (
    <div className="coffee__symbol">
      <Link to={'/homeload'}>
        <div
          className={classNames(
            'coffee__symbol-container',
            { home: ruleHome },
            { flex: ruleFlex },
            { none: ruleNone },
          )}
        >
          <div className="coffee__symbol-rect">
            <img src={zerno} alt="zerno" className="coffee__symbol-rect-img" />
          </div>
        </div>
      </Link>
    </div>
  );
};
