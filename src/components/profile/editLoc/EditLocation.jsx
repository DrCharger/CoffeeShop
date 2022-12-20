import React from 'react';
import { useForm } from 'react-hook-form';

const EditLocation = ({ user, adress, update, nav }) => {
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
      reset;
    }
  };

  return (
    <div className="edit">
      {' '}
      <h4>
        Current Address: <b>{adress.country}</b>, <b>{adress.city}</b>, <b>{adress.street}</b>,{' '}
        <b>{adress.house}</b>
      </h4>
      <div className="edit__account">
        <div>
          <input
            placeholder={adress.country}
            type="text"
            {...register('country', {
              required: 'Country',
              pattern: /[A-Za-z]/,
            })}
          />
        </div>
        <div onClick={() => handleChange('country')}>Change</div>
      </div>
      <div className="edit__account">
        <div>
          <input
            placeholder={adress.city}
            type="text"
            {...register('city', {
              required: 'City',
              pattern: /[A-Za-z]/,
            })}
          />
        </div>
        <div onClick={() => handleChange('city')}>Change</div>
      </div>
      <div className="edit__account">
        <div>
          <input
            placeholder={adress.street}
            type="text"
            {...register('street', {
              required: 'Street',
              pattern: /[A-Za-z]/,
            })}
          />
        </div>
        <div onClick={() => handleChange('street')}>Change</div>
      </div>
      <div className="edit__account">
        <div>
          <input
            placeholder={adress.house}
            type="text"
            {...register('house', {
              required: 'Street',
              pattern: /[A-Za-z]/,
            })}
          />
        </div>
        <div onClick={() => handleChange('house')}>Change</div>
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

export default EditLocation;
