import React, { useState } from 'react';
import RecItem from './RecItem';
import { recomended } from '../../../data/recs';
import { Link } from 'react-router-dom';

const Recomended = () => {
  const [menuId, setMenuId] = useState('01');

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
