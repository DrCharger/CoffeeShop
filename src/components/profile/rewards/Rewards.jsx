import React from 'react';
import { rewardArr } from '../../../data/reward';
import StyledBackwards from '../../styled/StyledBackwards';
import './rewards.scss';

const Rewards = ({ navigate, setDiscount }) => {
  return (
    <div className="rewards">
      <StyledBackwards navigate={navigate} />
      <h2 className="rewards__header">Rewards</h2>
      <p className="rewards__paragraph">
        Now there is <span>{rewardArr.length} reward</span> for you:
      </p>
      {rewardArr.map(item => (
        <div key={length} className="rewards__list">
          <div>{item.el}</div>
          <button
            onClick={() => {
              navigate('/main');
              setDiscount(item.minus / 100);
            }}
          >
            Use it now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Rewards;
