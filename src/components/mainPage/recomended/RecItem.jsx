import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../usersStore/users.actions';
import * as selectors from '../../../usersStore/users.selectors';
import cart from '../../../img/korzina.png';
import like from '../../../img/Like.png';

const RecItem = ({ discount = 0, el, shop, getLiked, liked, minusLiked, updater, myUser }) => {
  let navigate = useNavigate();
  const { price, id, text, url_name, parentId } = el;
  let newPriceText = price;
  const btn = liked.map(item => item.id).includes(id);

  if (discount !== 0) {
    newPriceText = price - price * discount;
  }
  const handlePlus = () => {
    getLiked(el);
    updater(myUser.id);
  };

  const handleMinus = () => {
    minusLiked(id);
    updater(myUser.id);
  };
  return (
    <figure>
      <img src={el.img} alt="coffee" className="figure-img" />
      <div className="flex-figure">
        <div>
          <figcaption className="recomended-products-text">{text}</figcaption>
          <figcaption className="recomended-products-price"> $ {newPriceText}</figcaption>
        </div>
        <div
          className="recomended-products-cart"
          onClick={() => navigate(`/details/${shop}/${parentId}/${url_name}`)}
        >
          <img src={cart} alt="buy" />
        </div>
      </div>
      {!btn ? (
        <div className="recomended-products-heart" onClick={handlePlus}>
          <img src={like} alt="Like-heart" />
        </div>
      ) : (
        <div className="recomended-products-heart__clicked" onClick={handleMinus}>
          <img src={like} alt="Like-heart" />
        </div>
      )}
    </figure>
  );
};

const mapState = state => {
  return {
    myUser: selectors.userSelector(state),
    liked: selectors.likedSelector(state),
  };
};

const mapDispatch = {
  getLiked: actions.setFavourites,
  minusLiked: actions.minusFavourites,
  updater: actions.updateUsersList,
};

export default connect(mapState, mapDispatch)(RecItem);
