import React from 'react';
import like from '../../../img/Like.png';
import cart from '../../../img/korzina.png';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { minusFavourites, setFavourites, updateUsersList } from '../../../usersStore/users.actions';

const RecItem = ({ el, shop, url, menuId, setFavourites, update, myUser, minus }) => {
  let navigate = useNavigate();

  const handleYesHeart = () => {
    setFavourites(el);
    update(myUser.id);
  };
  const handleNoHeart = () => {
    minus(el.id);
    update(myUser.id);
  };

  const { Favourites } = myUser;
  const btn = Favourites.map(item => item.id).includes(el.id);
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
        <div className="recomended-products-heart" onClick={handleYesHeart}>
          <img src={like} alt="Like-heart" />
        </div>
      ) : (
        <div className="recomended-products-heart__clicked" onClick={handleNoHeart}>
          <img src={like} alt="Like-heart" />
        </div>
      )}
    </figure>
  );
};

const mapState = state => {
  return {
    myUser: state.usersList.user,
  };
};

const mapDispatch = {
  setFavourites: setFavourites,
  update: updateUsersList,
  minus: minusFavourites,
};

export default connect(mapState, mapDispatch)(RecItem);
