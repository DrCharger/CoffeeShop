import React from 'react';
import { useForm } from 'react-hook-form';

const EditLocation = ({ user, adress, update, nav, updateServer }) => {
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
      {' '}
      <h4>
        Current Address: <b>{adress.country || 'Ukraine'}</b>, <b>{adress.city || 'Kiev'}</b>,{' '}
        <b>{adress.street || 'Street'}</b>, <b>{adress.house || 'House'}</b>
      </h4>
      <div className="edit__account">
        <div>
          <input
            placeholder={adress.country || 'Ukraine'}
            type="text"
            {...register('country', {
              required: 'Country',
            })}
          />
        </div>
        <div onClick={() => handleChange('country')}>Change</div>
      </div>
      <div className="edit__account">
        <div>
          <input
            placeholder={adress.city || 'Kiev'}
            type="text"
            {...register('city', {
              required: 'City',
            })}
          />
        </div>
        <div onClick={() => handleChange('city')}>Change</div>
      </div>
      <div className="edit__account">
        <div>
          <input
            placeholder={adress.street || 'Street'}
            type="text"
            {...register('street', {
              required: 'Street',
            })}
          />
        </div>
        <div onClick={() => handleChange('street')}>Change</div>
      </div>
      <div className="edit__account">
        <div>
          <input
            placeholder={adress.house || 'House'}
            type="text"
            {...register('house', {
              required: 'Street',
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
