import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Auth from '../utils/Auth';
import '../blocks/Login/Login.css';

function Login({ handleLogin, formValue, onChange, setFormValue }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true)
  if (isLoading) {
    return 'loading'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue;
    Auth.login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setFormValue({ username: '', password: '' });
          handleLogin();
          navigate('/', { replace: true });
        } else {
          return;
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
      
  };



  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <div className="login__container">
        <form className="login__form " name="login" onSubmit={handleSubmit} noValidate>
          <input
            className="login__input"
            name="email"
            placeholder="Email"
            type="email"
            value={formValue.email}
            onChange={onChange}
            required
          />
          <input
            className="login__input"
            name="password"
            placeholder="Пароль"
            type="password"
            value={formValue.password}
            onChange={onChange}
            required
          />
          <button className="login__button" type="submit" aria-label="Сохранить">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
