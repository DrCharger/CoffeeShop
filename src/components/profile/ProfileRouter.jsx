import React from 'react';
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from './profUtilits';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { updateAdressInfo, updateUserInfo, updateUsersList } from '../../usersStore/users.actions';
import { connect } from 'react-redux';
import './profile.scss';

import ProfileMain from './profileMain/ProfileMain';
import EditAccount from './editAcc/EditAccount';
import EditLocation from './editLoc/EditLocation';
import Payment from './payment/Payment';
import Policy from './policy/Policy';
import About from './about/About';

const ProfileRouter = ({ myUser, update, updateServer, adress, updateAdress }) => {
  let navigate = useNavigate();

  return (
    <div className="profile">
      <div className="profile-avatar">
        <Avatar {...stringAvatar(myUser.fullname)} sx={{ width: 50, height: 50 }} />
        <h5>{myUser.fullname}</h5>
      </div>
      <Routes>
        <Route path="*" element={<ProfileMain nav={navigate} />} />
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
};

export default connect(mapState, mapDispatch)(ProfileRouter);
