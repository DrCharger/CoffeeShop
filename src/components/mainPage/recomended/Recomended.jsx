import React, { useState } from 'react';
import RecItem from './RecItem';
import { recomended } from '../../../data/recs';
import { Link } from 'react-router-dom';

const Recomended = ({ forYou }) => {
  const [menuId, setMenuId] = useState('01');

  console.log(forYou);
  const recs = recomended;

  return (
    <section className="recomended">
      <h4 className="recomended-head">Recomended for you</h4>
      <div className="recomended-products">
        {recs.map(el => (
          <RecItem key={el.id} el={el} />
        ))}
      </div>
    </section>
  );
};

export default Recomended;
