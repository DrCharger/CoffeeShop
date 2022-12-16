import React, { useEffect } from 'react';
import { CoffeeSymbol } from '../coffeeSymbol/CoffeeSymbol';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getUsersList, setUserInfo } from '../../usersStore/users.actions';
import { connect } from 'react-redux';
import './login.scss';

const Login = ({ getUsers, users, setUser }) => {
  let navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    getUsers();
  }, []);

  const onSubmit = data => {
    const finded = users.find(user => user.email === data.email && user.password === data.password);
    if (finded !== undefined) {
      setUser(finded);
      navigate('/main');
      reset;
    } else {
      reset;
      alert('There is no user!!!');
    }
  };
  return (
    <div className="login-main">
      <CoffeeSymbol text="flex" />
      <h3 className="login-main-headline">LOGIN</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-main-text">Email</div>
        <input
          type="text"
          className="login-main-input"
          placeholder="example@gmail.com"
          {...register('email', {
            required: true,
            minLength: 2,
          })}
        />
        <div className="error">{errors?.email && <p>Invalid Email</p>}</div>

        <div className="login-main-text">Password</div>
        <input
          type="password"
          className="login-main-input"
          placeholder="********"
          {...register('password', {
            required: true,
            minLength: 2,
          })}
        />
        <div className="error">{errors?.password && <p>Password is Invalid</p>}</div>
        <div className="login-main-forgot">Forgot Password?</div>
        <input type="submit" className="login-main-input__submit" disabled={!isValid} />
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
