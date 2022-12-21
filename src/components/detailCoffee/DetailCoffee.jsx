import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import { allList } from '../../data/recs';
import './detailsCoffee.scss';
import { connect } from 'react-redux';
import { getOrderInfo } from '../../usersStore/users.actions';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DetailCoffee = ({ getOrder, discount }) => {
  let navigate = useNavigate();
  let params = useParams();
  const [level, setLevel] = useState('Normal');
  const [counter, setCounter] = useState(1);
  const [comment, setComment] = useState('');
  const [open, setOpen] = useState(false);
  const sugarLevel = ['Normal', 'Less Sugar'];

  const myCoffee = allList
    .find(item => item.id === params.id)
    .prods.find(el => el.url_name === params.coffee);

  let newPriceText = myCoffee.price;
  if (discount !== 0) {
    newPriceText = myCoffee.price - myCoffee.price * discount;
  }

  const toTheBasket = () => {
    setOpen(true);
    const toBasket = {
      shop: params.shop,
      level,
      counter,
      comment,
      myCoffee,
      newPriceText,
      id: Math.floor(Math.random() * 1000000),
    };
    getOrder(toBasket);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
              paddingLeft: '9px',
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
        <div className="details-coffee-price">$ {newPriceText}</div>
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
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
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
        <button className="details-description__order-btn" onClick={toTheBasket}>
          ADD TO BUSKET
        </button>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {counter} items added to the shopping cart!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

const mapDispatch = {
  getOrder: getOrderInfo,
};

export default connect(null, mapDispatch)(DetailCoffee);
