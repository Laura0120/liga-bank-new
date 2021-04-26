import React, {useEffect, useState } from 'react';

import {disablePageScrolling}  from '../utils'
import {ACCOUNT}  from '../const'
import Logo  from './logo'

const ModalSingIn = (props) => {
  const { setIsModal} = props;
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [account, setAccount] = useState(ACCOUNT);

  useEffect(() => {
    disablePageScrolling();
    window.addEventListener('keydown', onEcsDown);
    const savedLoginPassword = localStorage.getItem(`loginPassword`);
    const newLoginPassword = savedLoginPassword ? JSON.parse(savedLoginPassword) : account;
    setAccount(newLoginPassword);
  }, []);

  useEffect(() => {
    localStorage.setItem(`loginPassword`, JSON.stringify(account));
  }, [account]);

  const onClose = () => {
    document.body.classList.remove('no-scrolling');
    setIsModal(false);
    document.removeEventListener('keydown', onEcsDown);
  };

  const onEcsDown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      onClose();
    }
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    onClose()
  }

  return (
    <div className="sing-in__modal-sing-in modal-sing-in">
      <Logo />
      <button
          type="button"
          className="modal-sing-in__button-close  button-close"
          aria-label="закрыть форму"
          onClick={onClose}
        ></button>
      <h3 className="visually-hidden">Форма входа в интернет-банк</h3>
      <form onSubmit={onSubmit}>
        <div className='modal-sing-in__wrapper'>
          <label htmlFor="login">Логин</label>
          <input
            className='modal-sing-in__input input'
            type='text'
            id='login'
            name='login' 
            autoFocus
            required
            value={account.login}
            onChange={(evt)=>{
              setAccount({...account, [evt.target.name]: evt.target.value})
                }}/>
        </div>
        <div className='modal-sing-in__wrapper'>
          <label htmlFor="password">Пароль</label>
          <input
            className='modal-sing-in__input input'
            type={isVisiblePassword ? `text`: `password`}
            id='password'
            name='password'
            required
            value={account.password}
            onChange={(evt)=>{
            setAccount({...account, [evt.target.name]: evt.target.value})
              }}/>
          <label htmlFor='show-hide'></label>
          <input
            className="visually-hidden"
            type="checkbox"
            id='show-hide'
            aria-label='показать/скрыть пароль'
            onChange={()=>setIsVisiblePassword(true)}
            />
          <a href='#' className='modal-sing-in__restore-password'>Забыли пароль?</a>
        </div>
        <button className='modal-sing-in__button button' type='submit'>Войти</button>
      </form>
    </div>
  );
};


export default ModalSingIn;
