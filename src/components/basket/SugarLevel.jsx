import React, { useState } from 'react';

const SugarLevel = ({ item, onItemChange }) => {
  const [quantity, setQuantity] = useState(item.counter);

  return (
    <>
      <div className="quantity">
        <button
          onClick={() => {
            quantity <= 1 ? null : (setQuantity(quantity - 1), onItemChange(item.id, quantity - 1));
          }}
        >
          -
        </button>
        {quantity} items
        <button
          onClick={() => {
            setQuantity(quantity + 1), onItemChange(item.id, quantity + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default SugarLevel;
