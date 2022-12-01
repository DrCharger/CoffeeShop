import React from 'react';
import RecItem from './RecItem';
import { recomended } from '../../../data/recs';

const Recomended = () => {
  return (
    <section className="recomended">
      <h4 className="recomended-head">Recomended for you</h4>
      <div className="recomended-products">
        {recomended.map(el => (
          <RecItem key={el.id} el={el} />
        ))}
      </div>
    </section>
  );
};

export default Recomended;
