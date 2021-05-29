import React, { Component } from 'react';
import Button from './Button';
import { IoClose } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import { BtnClose, StyledAddComment } from '../Style/components/AddCommentStyled';

class AddComment extends Component {
  state = {
    UserRate: 0,
    userName: '',
    comment: '',
  }
  starColor = (num) => {
    let rate = this.state.UserRate;
    if (rate > num) {
      return 'var(--green)'
    } else {
      return '#d2d2d2'
    }
  }
  RateHandler = (rate) => {
    this.setState((prevState) => (prevState.UserRate = rate));
  }
  commentHandleChange = (e) => {
    let comment = e.target.value;
    this.setState({ comment });
  }
  inputHandleChange = (e) => {
    let userName = e.target.value;
    this.setState({ userName });
  }
  submitHandler = (e) => {
    // e.preventDefault();
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    const { UserRate, userName, comment, } = this.state;
    const { commentHandleChange, starColor, RateHandler, inputHandleChange, submitHandler } = this;
    const { clickHandler, item } = this.props;
    const disp = item ? 'block' : 'none';
    return (
      <StyledAddComment style={{ visibility: item ? 'visible' : 'hidden' }} >
        <section className='add__comment'>
          <p className='add__title'>Добавить отзыв</p>
          <BtnClose onClick={() => clickHandler()} className='close__form'><IoClose /></BtnClose>
          <section className='user__rate'>
            <p className='user__rate-text'>Ваша оценка:</p>
            <AiFillStar onClick={() => RateHandler(1)} style={{ color: starColor(0) }} className='user__rate-star' />
            <AiFillStar onClick={() => RateHandler(2)} style={{ color: starColor(1) }} className='user__rate-star' />
            <AiFillStar onClick={() => RateHandler(3)} style={{ color: starColor(2) }} className='user__rate-star' />
            <AiFillStar onClick={() => RateHandler(4)} style={{ color: starColor(3) }} className='user__rate-star' />
            <AiFillStar onClick={() => RateHandler(5)} style={{ color: starColor(4) }} className='user__rate-star' />

          </section>

          <form className='add__form'>
            <section className='form__group-name'>
              <label htmlFor='user__name' className='form__label'>Ваше имя:</label>
              <input required name='user__name' value={userName} onChange={(e) => inputHandleChange(e)} type='text' className='form__input-name' placeholder='Введите Ваше имя' />
            </section>
            <section className='form__group-comment'>
              <label htmlFor='user__comment' className='form__label'>Ваш отзыв:</label>
              <textarea onChange={(e) => commentHandleChange(e)} value={comment} maxLength='500' className='user__comment-text' />
              <p className='comment__length'>{comment.length}/500</p>
            </section>
            <Button onClick={(e) => submitHandler(e)} type='submit' className='form__btn' text='Добавить отзыв' fontSize='10px' width='94px' height='30px' />
          </form>
        </section>
      </ StyledAddComment>
    );
  }
}

export default AddComment;
