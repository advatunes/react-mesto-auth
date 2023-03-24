import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Auth from '../utils/Auth';
import '../blocks/Register/Register.css';

function Register({ onRegister, onStatus, formValue, onChange }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue;

    Auth.register(email, password)
      .then((res) => {
        if (res !== undefined) {
          onStatus(true);
          onRegister();

          navigate('/signin', { replace: true });
        } else {
          onStatus(false);
          onRegister();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='register'>
      <h2 className='register__title'>Регистрация</h2>
      <div className='register__container'>
        <form className='register__form ' name='register' noValidate onSubmit={handleSubmit}>
          <input
            className='register__input'
            name='email'
            placeholder='Email'
            type='email'
            value={formValue.email}
            onChange={onChange}
            required
          />
          <input
            className='register__input'
            name='password'
            placeholder='Пароль'
            type='password'
            value={formValue.password}
            onChange={onChange}
            required
          />
          <button className='register__button' type='submit' aria-label='Сохранить'>
            Зарегистрироваться
          </button>
        </form>
      </div>

      <p className='register__text'>
        Уже зарегистрированы?
        <Link to='/signin' className='register__link'>
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
