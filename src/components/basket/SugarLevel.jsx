import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Normal', 'More Sugar', 'Less Sugar'];

const SugarLevel = ({ item, onItemChange }) => {
  const [sugLev, setSugLev] = useState(item.level);
  const [quantity, setQuantity] = useState(item.counter);

  return (
    <>
      <div className="quantity">
        <button
          onClick={() => {
            setQuantity(quantity - 1), onItemChange(item.id, quantity - 1, sugLev);
          }}
        >
          -
        </button>
        {quantity} items
        <button
          onClick={() => {
            setQuantity(quantity + 1), onItemChange(item.id, quantity + 1, sugLev);
          }}
        >
          +
        </button>
      </div>

      <Autocomplete
        options={options}
        id="controlled-demo"
        value={sugLev}
        sx={{ width: 150 }}
        onChange={(event, newValue) => {
          setSugLev(newValue);
          onItemChange(item.id, quantity, newValue);
        }}
        renderInput={params => <TextField {...params} variant="standard" />}
      />
    </>
  );
};

export default SugarLevel;
