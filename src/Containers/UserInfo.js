import React, { useEffect, useState } from 'react';
import orders from '../db/orders';
import Display from "../Assets/images/displayWithClock.svg";
import DisplayGreen from "../Assets/images/displayWithClockGreen.svg";

import Notes from '../Assets/images/notes.svg';
import NotesGreen from '../Assets/images/notesGreen.svg'
import Button from '../Components/Button';

import { StyledUserInfo } from '../Style/containers/UserInfoStyled';
import products from '../db/products';

const UserInfo = () => {
  const [showOrders, setShowOrders] = useState(false);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const prodId = orders.map(item => { return [...item.products] })
    const id = prodId.map(item => item.map(inner => {
      setProductsList([...productsList, { id: inner.id }])
      console.log(inner.id, 'inner')
    }))
    // const id = prodId.map(item => { item.map(inner => setProductsList({ ...productsList, id: inner.id })) })
    // console.log(prodId)
  }, []);

  console.log(productsList, ' state')

  const showOrdersHandler = () => {
    setShowOrders(!showOrders);
  }

  return (
    <StyledUserInfo>
      <div className='page__header'>
        <section onClick={showOrdersHandler} className='page__header-items' style={{ background: showOrders ? '' : 'var(--green)' }}>
          <img className='header__icon-display' src={showOrders ? DisplayGreen : Display} />
          <h5 className='header__title' style={{ color: showOrders ? 'var(--green)' : '#fff' }} > Личные данные</h5>
        </section>
        <section onClick={showOrdersHandler} className='page__header-items' style={{ background: showOrders ? 'var(--green)' : '' }}>
          <img className='header__icon-notes' src={showOrders ? Notes : NotesGreen} />
          <h5 className='header__title' style={{ color: showOrders ? '#fff' : 'var(--green)' }}>История заказов</h5>
        </section>
      </div>
      <div className='user' style={{ display: showOrders ? 'none' : 'flex' }}>

        <div className='user__inners'>
          <h2 className='user__inner-title'>Персональная информация</h2>
          <section className='user__photo'>
            <section className='no__photo'></section>
            <p className='add__photo'>Загрузить фотографию</p>
          </section>
          <form className='personal__info'>
            <section className='user__info'>
              <section className='form__group'>
                <label className='form__label' htmlFor='name'>Ваше имя</label>
                <input className='form__input' name='name' type='text' placeholder='Имя' />
              </section>
              <section className='form__group'>
                <label className='form__label' htmlFor='surname'>Ваша фамилия</label>
                <input className='form__input' name='surname' type='text' placeholder='Фамилия' />
              </section>
            </section>
            <section className='form__group'>
              <label className='form__label' htmlFor='patronymic'>Ваше отчество</label>
              <input className='form__input' name='patronymic' type='text' placeholder='Отчество' />
            </section>
            <section className='form__group'>
              <label className='form__label' htmlFor='email'>Адрес электронной почты</label>
              <input className='form__input email' name='email' type='email' placeholder='Email' />
            </section>

          </form>
        </div>
        <div className='other__info'>
          <h2 className='other__info-title'>Контактная информация </h2>
          <h5 className='other__info-title-text'>(подтверждение заказов)</h5>
          <section className='user__phone'>
            <section className='form__group'>
              <label className='form__label' htmlFor='phone'>Основной телефон</label>
              <input className='form__input' name='phone' type='phone' placeholder='+380' />
            </section>
            <section className='form__group'>
              <label className='form__label' htmlFor='secondPhone'>Дополнительный</label>
              <input className='form__input' name='secondPhone' type='phone' placeholder='+380' />
            </section>
          </section>
          <h4 className='form__password-title'>Изменение пароля</h4>
          <section className='form__group'>
            <label className='form__label' htmlFor='oldPassword'>Ваш старый пароль</label>
            <input className='form__input' name='oldPassword' type='password' placeholder='Старый пароль' />
          </section>
          <section className='form__group'>
            <label className='form__label' htmlFor='newPassword'>Ваш новый пароль</label>
            <input className='form__input' name='newPassword' type='password' placeholder='Новый пароль' />
          </section>
          <section className='form__group'>
            <label className='form__label' htmlFor='repeatPassword'>Подтверждение</label>
            <input className='form__input' name='repeatPassword' type='password' placeholder='Подтвердите пароль' />
          </section>
          <Button className='form__save-btn' text='Сохранить изменения' fontSize='12px' width='184px' height='43px' />

        </div>


      </div>
      <div className='user__orders' style={{ display: showOrders ? 'block' : 'none' }}>
        {orders.map((order, index) => (
          <section key={order.id} className='order'>
            <section className='order__items'>
              <section className='order__inners'>
                <h3 className='order__inners-title'>Номер заказа:</h3>
                <p className='order__inners-text'>{order.id}</p>
              </section>
              <section className='order__inners'>
                <h3 className='order__inners-title'>Способ оплаты:</h3>
                <p className='order__inners-text'>{order.paymentMethod}</p>
              </section>
              <section className='order__inners'>
                <h3 className='order__inners-title'>Дата заказа:</h3>
                <p className='order__inners-text'>{order.orderDate}</p>
              </section>
              {order.status === 'delivered' ? (
                <section className='order__inners'>
                  <h3 className='order__inners-title'>Дата доставки:</h3>
                  <p className='order__inners-text'>{order.deliveredDate}</p>
                </section>
              ) : ''}
              <section className='order__inners'>
                <h3 className='order__inners-title'>Статус заказа:</h3>
                <p className='order__inners-text'>{order.status}</p>
              </section>
            </section>
            <section className='order__products'>
              {order.products.map((product, index) => (
                <section className='order__products-items' key={product.id}>
                  {/* {products} */}
                </section>
              ))}
            </section>
          </section>
        ))}
      </div>
    </StyledUserInfo>
  );
}

export default UserInfo;
