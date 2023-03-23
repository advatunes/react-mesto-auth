import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import logo from '../images/header__logo.svg';

function Header({ email }) {
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem('jwt');
    navigate('/login');
  }

  return (
    <header className='header'>
      <a className='header__logo' href='#'>
        <img className='header__logo-img' src={logo} alt='логотип' />
      </a>

      <Routes>
        <Route
          path='/signin'
          element={
            <Link to='/signup' className='header__button'>
              Регистрация
            </Link>
          }
        ></Route>

        <Route
          path='/signup'
          element={
            <Link to='/signin' className='header__button'>
              Войти
            </Link>
          }
        ></Route>

        <Route
          path='/'
          element={
            <>
              <p className='header__email'>{email}</p>
              <Link to='/signin' className='header__button header__button_logout' onClick={signOut}>
                Выйти
              </Link>
            </>
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
