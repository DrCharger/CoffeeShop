import React, { useEffect, useState } from 'react';
import { CoffeeSymbol } from '../coffeeSymbol/CoffeeSymbol';
import { Link, useNavigate } from 'react-router-dom';

import './login.scss';
import { connect } from 'react-redux';
import { getUsersList, setUserInfo } from '../../usersStore/users.actions';

const Login = ({ getUsers, users, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  console.log(users);

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const finded = users.find(user => user.email === email && user.password === password);
    if (finded !== undefined) {
      setEmail('');
      setPassword('');
      setUser(finded);
      navigate('/main');
    } else {
      alert('There is no user!!!');
    }
  };
  return (
    <div className="login-main">
      <CoffeeSymbol text="flex" />
      <h3 className="login-main-headline">LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <div className="login-main-text">Email</div>
        <input
          type="text"
          className="login-main-input"
          placeholder="example@gmail.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <div className="login-main-text">Password</div>
        <input
          type="password"
          className="login-main-input"
          placeholder="********"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <div className="login-main-forgot">Forgot Password?</div>
        <input type="submit" className="login-main-input__submit" />
        <div className="login-main-text">
          <span className="login-main-text__center">
            Don't have an account?{' '}
            <Link to="/register">
              <span className="login-main-text__register">Register</span>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

const mapState = state => {
  return {
    users: state.usersList.usersList,
  };
};

const mapDispatch = {
  getUsers: getUsersList,
  setUser: setUserInfo,
};

export default connect(mapState, mapDispatch)(Login);
