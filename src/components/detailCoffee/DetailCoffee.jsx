import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import { allList } from '../../data/recs';
import './detailsCoffee.scss';

const DetailCoffee = () => {
  let navigate = useNavigate();
  let params = useParams();
  const [level, setLevel] = useState(false);
  const [counter, setCounter] = useState(1);

  const myCoffee = allList
    .find(param => param.id === params.id)
    .prods.find(el => el.url_name === params.coffee);

  console.log(myCoffee);

  const sugarLevel = ['Normal', 'Less Sugar'];
  return (
    <div className="details-main">
      <div className="details-main__img">
        <img src={myCoffee.img} alt="logo" className="details-main__img-url" />
        <div>
          <Button
            variant="contained"
            startIcon={<ArrowBackIosNewTwoToneIcon />}
            sx={{
              color: '#543820',
              borderRadius: '50%',
              minWidth: 35,
              height: 35,
              padding: 0,
              marginLeft: '5%',
              opacity: 0.7,
            }}
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
      <div className="details-coffee">
        <div className="details-coffee-container">
          <h3 className="details-coffee-header">{myCoffee.text}</h3>
          <h5>{myCoffee.text}</h5>
        </div>
        <div className="details-coffee-price">{myCoffee.price}</div>
      </div>
      <div className="details-sugar">
        <h3 className="details-sugar__text">Sugar level</h3>
        {sugarLevel.map(el => (
          <div className="details-sugar-container" key={el}>
            <span>{el}</span>
            <input type="radio" checked={level === el} onChange={() => setLevel(el)} />
          </div>
        ))}
      </div>
      <div className="details-description">
        <h3 className="details-sugar__text">Special Instructions</h3>
        <textarea
          className="details-description__area"
          name="details"
          id="1"
          placeholder="E.g. Delivery time"
        ></textarea>
        <div className="details-description__counter">
          <button
            className="details-description__counter-btn"
            onClick={() => {
              counter <= 1 ? setCounter(counter) : setCounter(counter - 1);
            }}
          >
            -
          </button>
          <span className="details-description__counter-text">{counter}</span>
          <button
            className="details-description__counter-btn"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
        </div>
        <button className="details-description__order-btn">ADD TO BUSKET</button>
      </div>
    </div>
  );
};

export default DetailCoffee;
