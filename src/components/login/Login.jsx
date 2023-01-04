import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Forgot from './forgot/Forgot';
import { setItem } from '../../data/local';
import { CoffeeSymbol } from '../coffeeSymbol/CoffeeSymbol';
import './login.scss';
import { findUser } from '../../data/utilits';

const Login = ({ users, getUsers }) => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    const finded = findUser(users, data.email, data.password);
    if (finded !== undefined) {
      setItem('email', data.email);
      setItem('password', data.password);
      navigate('/main');
    } else {
      reset({ password: '' });
      alert('There is no user!!!');
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);
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
        <div className="login-main-forgot" onClick={() => setOpen(true)}>
          Forgot Password?
        </div>
        <input type="submit" className="login-main-input__submit" />
        <div className="login-main-text">
          <span className="login-main-text__center">
            Don't have an account?
            <span className="login-main-text__register" onClick={() => navigate('/register')}>
              Register
            </span>
          </span>
        </div>
      </form>
      <Forgot open={open} setClose={setOpen} users={users} />
    </div>
  );
};

export default Login;
