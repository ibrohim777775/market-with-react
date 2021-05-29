import React, { Component } from 'react';
import { BiPhone, BiUser } from 'react-icons/bi';
import { VscKey } from 'react-icons/vsc';
import '../Style/UserAuth.css';

class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrue: false
    }
  }

  render() {
    let displayIsBlock = this.props.authDisplay;
    return (
      <div className='user__auth-body' style={{ display: displayIsBlock }}>
        <div className='user__auth'>
          <form className='user__auth-inner'>
            <button onClick={() => this.props.showAuth()} className='exit__auth'>x</button>
            <BiUser className='auth-user__icon' />
            <p className='auth__title'>Войти в личный кабинет</p>
            <div className='input__phone'>
              <BiPhone className='auth__icon-phone' />
              <input placeholder='Телефон' type='tel' maxLength='12' required className='auth__input-phone'></input>
            </div>
            <div className='input__password'>
              <VscKey className='auth__icon-key' />
              <input required minLength='6' placeholder='Пароль' type='password' className='auth__input-password'></input>
            </div>
            <a href='#' className='forgot__password'>Забыли пароль?</a>
            <button className='login__btn'>Войти</button>
            <p className='auth__text'>Впервые у нас?    <a onClick={() => this.props.showNewUser()} href='#'>Зарегистрироваться</a> </p>
          </form>
        </div>
      </div>
    );
  }
}

export default UserAuth;
