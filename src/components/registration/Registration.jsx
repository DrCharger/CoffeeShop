import React, { useState } from 'react';
import { CoffeeSymbol } from '../coffeeSymbol/CoffeeSymbol';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../usersStore/users.actions';

const Registration = ({ createUser }) => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    setEmail('');
    setPassword('');
    setFullname('');
    setNumber('');
    const newUser = {
      email,
      fullname,
      number,
      password,
    };
    createUser(newUser);
  };

  return (
    <div className="login-main">
      <CoffeeSymbol text="flex" />
      <h3 className="login-main-headline">REGISTER</h3>
      <form onSubmit={handleSubmit} action="/login">
        <div className="login-main-text">Fullname</div>
        <input
          type="text"
          className="login-main-input"
          placeholder="John Doe"
          value={fullname}
          onChange={e => setFullname(e.target.value)}
          required
        />
        <div className="login-main-text">Email</div>
        <input
          type="text"
          className="login-main-input"
          placeholder="example@gmail.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <div className="login-main-text">Phone Number</div>
        <input
          type="text"
          className="login-main-input"
          placeholder="+38(0**)000-00-00"
          value={number}
          onChange={e => setNumber(e.target.value)}
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
        <input type="submit" className="login-main-input__submit" />
        <div className="login-main-text">
          <span className="login-main-text__center">
            Already have an account?{' '}
            <Link to="/login">
              <span className="login-main-text__register">Login</span>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

const mapDispatch = {
  createUser: userActions.createUsersList,
};

export default connect(null, mapDispatch)(Registration);
