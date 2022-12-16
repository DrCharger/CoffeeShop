import React, { useState } from 'react';
import like from '../../../img/Like.png';
import cart from '../../../img/korzina.png';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { minusFavourites, setFavourites } from '../../../usersStore/users.actions';

const RecItem = ({ el, shop, url, menuId, getLiked, liked, minusLiked }) => {
  let navigate = useNavigate();
  const btn = liked.map(item => item.id).includes(el.id);

  const handlePlus = () => {
    getLiked(el);
  };

  const handleMinus = () => {
    minusLiked(el.id);
  };

  console.log(liked);
  return (
    <figure key={el.id}>
      <img src={el.img} alt="cappuchino" className="figure-img" />
      <div className="flex-figure">
        <div>
          <figcaption className="recomended-products-text">{el.text}</figcaption>
          <figcaption className="recomended-products-price">{el.price}</figcaption>
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
};

export default connect(mapState, mapDispatch)(RecItem);
