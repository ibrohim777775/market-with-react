import React, { Component } from 'react';
import Button from '../Components/Button';
import '../Style/containers/Support.css';

class Support extends Component {
  render() {
    return (
      <div className='support__body'>
        <h1 className='support__title'>
          Поддержка
        </h1>
        <form>
          <textarea className='support__text' placeholder='Напишите сообщение...' name='support'></textarea>
          <div className='support__btn'>
            <Button width='189px' height='60px' text='Отправить' fontSize='19px' />

          </div>
        </form>
      </div>
    );
  }
}

export default Support;
