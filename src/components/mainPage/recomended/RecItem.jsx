import React from 'react';
import like from '../../../img/Like.png';
import cart from '../../../img/korzina.png';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { minusFavourites, setFavourites, updateUsersList } from '../../../usersStore/users.actions';

const RecItem = ({
  discount,
  el,
  shop,
  url,
  menuId,
  getLiked,
  liked,
  minusLiked,
  updater,
  myUser,
}) => {
  let navigate = useNavigate();
  const btn = liked.map(item => item.id).includes(el.id);

  const handlePlus = () => {
    getLiked(el);
    updater(myUser.id);
  };

  const handleMinus = () => {
    minusLiked(el.id);
    updater(myUser.id);
  };
  let newPriceText = el.price;
  if (discount !== 0) {
    newPriceText = el.price - el.price * discount;
  }

  return (
    <figure key={el.id}>
      <img src={el.img} alt="cappuchino" className="figure-img" />
      <div className="flex-figure">
        <div>
          <figcaption className="recomended-products-text">{el.text}</figcaption>
          <figcaption className="recomended-products-price"> $ {newPriceText}</figcaption>
        </div>
        <div
          className="recomended-products-cart"
          onClick={() => navigate(`/details/${shop}/${menuId}/${url}`)}
        >
          <img src={cart} alt="buy it" />
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
    myUser: state.usersList.user,
    liked: state.usersList.liked,
  };
};

const mapDispatch = {
  getLiked: setFavourites,
  minusLiked: minusFavourites,
  updater: updateUsersList,
};

export default connect(mapState, mapDispatch)(RecItem);
