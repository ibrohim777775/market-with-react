import React, { Component } from 'react';
import { BiPhone, BiUser } from 'react-icons/bi';
import { VscKey } from 'react-icons/vsc'
import '../Style/UserAuth.css';
import '../Style/NewUserReg.css'

class NewUserReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
  }

  circleHandler = (e) => {
    // this.state.circleStyle === '' ? this.setState({ circleStyle: style }) : this.setState({ circleStyle: '' });
    this.setState((prevState) => ({ ...prevState, isShow: !prevState.isShow }))
    console.log(this.state.isShow);
  }


  render() {
    let { newUserDisp, circleStyle } = this.props;
    return (
      <div className='user__auth-body' style={{ display: newUserDisp }}>
        <div className='user__auth'>
          <div className='user__auth-inner'>
            <button onClick={() => this.props.showNewUser()} className='exit__auth'>x</button>
            <BiUser className='auth-user__icon' />
            <p className='auth__title'>Регистрация</p>
            <div className='input__phone'>
              <BiPhone className='auth__icon-phone' />
              <input placeholder='Телефон' className='auth__input-phone'></input>
            </div>
            <div className='input__password'>
              <VscKey className='auth__icon-key' />
              <input placeholder='Пароль' type='password' className='auth__input-password mb'></input>
            </div>
            <div className='input__password'>
              <VscKey className='auth__icon-key' />
              <input placeholder='Подтвердите пароль' type='password' className='auth__input-password'></input>
            </div>
            <div className='info__items'>
              <div className='info__toEmail'>
                <div onClick={() => this.circleHandler()} className={this.state.isShow ? 'circle' : 'circle circle--bg'}></div>
                <p className='toEmail__text'>Хочу получать выгодные предложения от магазина</p>
              </div>
              <div className='info__toEmail second'>
                <div onClick={() => this.circleHandler()} style={{ circleStyle }} className='circle'></div>
                <p className='toEmail__text'>Принимаю условия Пользовательского соглашения,<br></br><a href='#'> Политики конфиденциальности</a></p>
              </div>
            </div>
            <button className='login__btn'>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUserReg;
