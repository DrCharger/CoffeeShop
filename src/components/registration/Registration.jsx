import React from 'react';
import { CoffeeSymbol } from '../coffeeSymbol/CoffeeSymbol';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../usersStore/users.actions';
import { useForm } from 'react-hook-form';
import { pass, email } from '../../data/valid';

const Registration = ({ createUser }) => {
  let navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    createUser(data);
    navigate('/login');
    reset;
  };

  return (
    <div className="login-main">
      <CoffeeSymbol text="flex" />
      <h3 className="login-main-headline">REGISTER</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-main-text">Fullname</div>
        <input
          type="text"
          className="login-main-input"
          placeholder="John Doe"
          {...register('fullname', {
            required: 'Name is required',
            pattern: /[A-Za-z]/,
            minLength: 4,
          })}
        />
        <div className="error">{errors?.fullname && <p>Invalid Name(Min 4 letters)</p>}</div>
        <div className="login-main-text">Email</div>
        <input
          type="text"
          className="login-main-input"
          placeholder="example@gmail.com"
          {...register('email', {
            required: 'Email is required',
            pattern: email,
          })}
        />
        <div className="error">
          {errors?.email && <p>Please type correct email or check the spaces</p>}
        </div>
        <div className="login-main-text">Phone Number</div>
        <input
          type="tel"
          className="login-main-input"
          {...register('number', {
            value: '+380',
            maxLength: 13,
            minLength: 13,
          })}
        />
        <div className="error">{errors?.number && <p>Invalid Phone-number</p>}</div>

        <div className="login-main-text">Password(don't use your real password please)</div>
        <input
          type="password"
          className="login-main-input"
          placeholder="********"
          {...register('password', {
            required: 'Type password',
            pattern: pass,
          })}
        />
        <div className="error">
          {errors?.password && (
            <p>
              {errors?.password?.message ||
                'Password must containe Upper-,Lower- letters, and number'}
            </p>
          )}
        </div>
        <input type="submit" className="login-main-input__submit" disabled={!isValid} />
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
