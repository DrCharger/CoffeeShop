import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../usersStore/users.actions';
import { locationSelector } from '../../usersStore/users.selectors';

import ProfileMain from './profileMain/ProfileMain';
import EditAccount from './editAcc/EditAccount';
import EditLocation from './editLoc/EditLocation';
import Policy from './policy/Policy';
import About from './about/About';
import Rewards from './rewards/Rewards';
import { stringAvatar } from './profUtilits';
import Avatar from '@mui/material/Avatar';
import './profile.scss';

const ProfileRouter = ({ myUser, ...props }) => {
  let navigate = useNavigate();

  return (
    <div className="profile">
      <div className="profile-avatar">
        <Avatar {...stringAvatar(myUser.fullname)} sx={{ width: 50, height: 50 }} />
        <h5>{myUser.fullname}</h5>
      </div>
      <Routes>
        <Route
          path="*"
          element={<ProfileMain nav={navigate} reset={props.reset} setUser={props.setUser} />}
        />
        <Route
          path="pencil"
          element={
            <EditAccount
              user={myUser}
              nav={navigate}
              update={props.update}
              updateServer={props.updateServer}
            />
          }
        />
        <Route
          path="loc"
          element={
            <EditLocation
              user={myUser}
              nav={navigate}
              update={props.updateAdress}
              updateServer={props.updateServer}
              adress={props.adress}
            />
          }
        />
        <Route
          path="rew"
          element={<Rewards navigate={navigate} setDiscount={props.setDiscount} />}
        />
        <Route path="policy" element={<Policy navigate={navigate} />} />
        <Route path="about" element={<About navigate={navigate} />} />
      </Routes>
    </div>
  );
};
const mapState = state => {
  return {
    adress: locationSelector(state),
  };
};

const mapDispatch = {
  setUser: actions.setUserInfo,
  update: actions.updateUserInfo,
  updateServer: actions.updateUsersList,
  updateAdress: actions.updateAdressInfo,
  reset: actions.reset,
};

export default connect(mapState, mapDispatch)(ProfileRouter);
