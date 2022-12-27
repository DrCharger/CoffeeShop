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
        <button className="btn-margin" onClick={() => handleChange('country')}>
          Change
        </button>
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
        <button className="btn-margin" onClick={() => handleChange('city')}>
          Change
        </button>
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
        <button className="btn-margin" onClick={() => handleChange('street')}>
          Change
        </button>
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
        <button className="btn-margin" onClick={() => handleChange('house')}>
          Change
        </button>
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
