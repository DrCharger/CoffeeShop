import React from 'react';
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from './profUtilits';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  reset,
  setAllOrders,
  setFavourites,
  updateAdressInfo,
  updateUserInfo,
  updateUsersList,
} from '../../usersStore/users.actions';
import { connect } from 'react-redux';
import './profile.scss';

import ProfileMain from './profileMain/ProfileMain';
import EditAccount from './editAcc/EditAccount';
import EditLocation from './editLoc/EditLocation';
import Policy from './policy/Policy';
import About from './about/About';
import Rewards from './rewards/Rewards';

const ProfileRouter = ({
  setDiscount,
  myUser,
  update,
  updateServer,
  adress,
  updateAdress,
  reset,
}) => {
  let navigate = useNavigate();

  return (
    <div className="profile">
      <div className="profile-avatar">
        <Avatar {...stringAvatar(myUser.fullname)} sx={{ width: 50, height: 50 }} />
        <h5>{myUser.fullname}</h5>
      </div>
      <Routes>
        <Route path="*" element={<ProfileMain nav={navigate} reset={reset} />} />
        <Route
          path="pencil"
          element={
            <EditAccount user={myUser} nav={navigate} update={update} updateServer={updateServer} />
          }
        />
        <Route
          path="loc"
          element={
            <EditLocation
              user={myUser}
              nav={navigate}
              update={updateAdress}
              updateServer={updateServer}
              adress={adress}
            />
          }
        />
        <Route path="policy" element={<Policy />} />
        <Route path="about" element={<About />} />
        <Route path="rew" element={<Rewards navigate={navigate} setDiscount={setDiscount} />} />
      </Routes>
    </div>
  );
};
const mapState = state => {
  return {
    adress: state.usersList.location,
  };
};

const mapDispatch = {
  update: updateUserInfo,
  updateServer: updateUsersList,
  updateAdress: updateAdressInfo,
  reset: reset,
};

export default connect(mapState, mapDispatch)(ProfileRouter);
