import React from 'react';
import './edit.scss';
import { useForm } from 'react-hook-form';
import { email } from '../../../data/valid';

const EditAccount = ({ user, update, updateServer, nav }) => {
  const {
    register,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: 'onChange',
  });

  const handleChange = name => {
    if (watch(name) === '' || errors[name] !== undefined) {
      return null;
    } else {
      update(name, watch(name));
      updateServer(user.id);
      reset;
    }
  };

  return (
    <div className="edit">
      <div className="edit__account">
        <div>
          <span>
            Current name: <b>{user.fullname}</b>
          </span>
          <input
            placeholder={user.fullname}
            type="text"
            {...register('fullname', {
              required: 'Name is required',
              pattern: /[A-Za-z]/,
              minLength: 4,
            })}
          />
          <div className="error">{errors?.fullname && <p>Invalid Name</p>}</div>
        </div>
        <div onClick={() => handleChange('fullname')}>Change</div>
      </div>
      <div className="edit__account">
        <div>
          <span>
            Current number: <b>{user.number}</b>
          </span>
          <div className="edit__flex">
            <span>+380</span>
            <input
              type="tel"
              {...register('number', {
                maxLength: 9,
                minLength: 9,
              })}
            />
          </div>
          <div className="error">{errors?.number && <p>Invalid Phone-number</p>}</div>
        </div>
        <div onClick={() => handleChange('number')}>Change</div>
      </div>
      <div className="edit__account">
        <div>
          <span>
            Current email: <b>{user.email}</b>
          </span>
          <input
            type="email"
            placeholder="example@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: email,
            })}
          />
          <div className="error">
            {errors?.email && <p>{errors?.email?.message || 'Invalid Email'}</p>}
          </div>
        </div>
        <div onClick={() => handleChange('email')}>Change</div>
      </div>
      <button
        className="login-main-input__submit"
        onClick={e => {
          e.preventDefault();
          nav(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default EditAccount;
