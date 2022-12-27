import React from 'react';
import { useForm } from 'react-hook-form';
import { email } from '../../../data/valid';
import './edit.scss';

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
        <button onClick={() => handleChange('fullname')}>Change</button>
      </div>
      <div className="edit__account">
        <div>
          <span>
            Phone-number: <b>{user.number}</b>
          </span>
          <div className="edit__flex">
            <input
              type="tel"
              {...register('number', {
                value: '+380',
                maxLength: 13,
                minLength: 13,
              })}
            />
          </div>
          <div className="error">{errors?.number && <p>Invalid Phone-number</p>}</div>
        </div>
        <button onClick={() => handleChange('number')}>Change</button>
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
        <button onClick={() => handleChange('email')}>Change</button>
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
