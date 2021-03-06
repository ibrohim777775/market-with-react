import React, { useContext, useEffect, useRef, useState } from 'react';
import BasketList from '../Components/BasketList';
import Button from '../Components/Button';
import products from '../db/products';
import { BasketContext } from '../context/basket';
import User, { useUser } from '../context/user';
import { StyledOrder } from '../Style/containers/OrderingStyled';

const Ordering = () => {
  const [displayTextArea, setdisplayTextArea] = useState(false);
  const { shopCart } = useContext(BasketContext);
  const [shopTotal, setShopTotal] = useState(0);
  const [promo, setPromo] = useState(0);

  // const basketTotal = () => {

  //   let sum = shopTotal;
  //   let sumBasket = 0;
  //   shopCart.map((item) => {
  //     const ggo = products.filter((product) => product.id === item.id);
  //     // shopPrice += item.count * ggo[0].price;
  //     sum = item.count * ggo[0].price;
  //     sumBasket += sum;
  //   });
  //   setShopTotal(sumBasket);
  // }

  useEffect(() => {
    let sum = shopTotal;
    let sumBasket = 0;
    shopCart.map((item) => {
      const ggo = products.filter((product) => product.id === item.id);
      // shopPrice += item.count * ggo[0].price;
      sum = item.count * ggo[0].price;
      sumBasket += sum;
    });
    setShopTotal(sumBasket);
    // basketTotal();
  });
  const [order, setOrder] = useState({
    name: '',
    region: '',
    phone: '',
    addres: '',
    isDelivery: true,
    paymentMethod: '',
    comment: '',
    orderTime: ''
  });
  const inputRef = useRef();


  const showTextArea = (e) => {
    e.preventDefault();
    setdisplayTextArea(true);
  }
  useEffect(() => {
    // console.log(inputRef.current.value, 'useeffect')
  });
  const changeHandler = ({ target }) => {
    console.dir(target.value)
    setOrder((prev) => ({ ...prev, [target.name]: target.value }));
    // console.log(target.value)
  }

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(order)
  }
  const deliveryHandler = () => {
    if (!order.isDelivery) {
      setPromo(shopTotal * 0.2)
    }
    setOrder((prev) => ({ ...prev, isDelivery: !prev.isDelivery }));

  }

  return (
    <StyledOrder>
      <div className='products'>
        <h1 className='page__title'>???????????????????? ????????????</h1>
        <h4 className='page__text'>???? ????????????????:</h4>
        <section className='basket__list'>
          <BasketList />

        </section>
      </div>
      <div className='ordering'>
        <form style={{ display: order.isDelivery ? 'block' : 'none' }}>
          <div className='ordering__items'>
            <label htmlFor='region' className='ordering__label'>?????????? ????????????????</label>
            <select
              className='ordering__input'
              onChange={changeHandler}
              value={order.region}
              name='region'
              type='text'
              placeholder='??????????????'>
              <option className='ordering__select' value='Kuzminki'>????????????????</option>
              <option className='ordering__select' value='Vixino'>????????????</option>
              <option className='ordering__select' value='Tekstilshiki'>??????????????????????</option>
              <option className='ordering__select' value='Mitino'>????????????</option>

            </select>
          </div>

          <div className='ordering__items'>
            <label htmlFor='name' className='ordering__label'>??????</label>
            <input value={order.name} onChange={changeHandler} className='ordering__input' name='name' type='text' placeholder='?????????????? ???????? ???????????? ??????'></input>
          </div>

          <div className='ordering__items'>
            <label htmlFor='phone' className='ordering__label'>??????????????</label>
            <input value={order.phone} onChange={changeHandler} className='ordering__input' name='phone' type='phone' placeholder='+380'></input>
          </div>

          <div className='ordering__items'>
            <label htmlFor='addres' className='ordering__label'>?????????? ????????????????</label>
            <input value={order.addres} onChange={changeHandler} className='ordering__input' name='addres' type='text' placeholder='?????????????? ?????????? ????????????????'></input>
          </div>

          <div className='ordering__items'>
            <label htmlFor='paymentMethod' className='ordering__label'>???????????? ????????????</label>
            <select onChange={changeHandler} value={order.paymentMethod} className='ordering__input' name='paymentMethod' type='text' placeholder='????????????????'>
              <option className='ordering__select' value='withCard'>?? ???????????????????? ??????????</option>
              <option className='ordering__select' value='cash'>??????????????????</option>

            </select>
          </div>
          <h5 onClick={showTextArea} style={{ display: displayTextArea ? 'none' : 'block' }} className='add__comment'>???????????????? ??????????????????????.</h5>
          <label htmlFor='comment' style={{ display: displayTextArea ? 'block' : 'none' }} className='ordering__label'>?????????????????????? ?? ????????????</label>
          <input value={order.comment} onChange={changeHandler} className='ordering__input' name='comment' style={{ display: displayTextArea ? 'block' : 'none' }} placeholder='?????????????? ?????? ??????????????????????...'></input>
          <Button onClick={clickHandler} text='???????????????? ??????????' width='183px' height='58px' fontSize='16px' />
        </form>
        <form style={{ display: order.isDelivery ? 'none' : 'block' }}>

          <div className='ordering__items'>
            <label htmlFor='name' className='ordering__label'>??????</label>
            <input value={order.name} onChange={changeHandler} className='ordering__input' name='name' type='text' placeholder='?????????????? ???????? ???????????? ??????'></input>
          </div>

          <div className='ordering__items'>
            <label htmlFor='phone' className='ordering__label'>??????????????</label>
            <input value={order.phone} onChange={changeHandler} className='ordering__input' name='phone' type='phone' placeholder='+380'></input>
          </div>
          <div className='ordering__items'>
            <label htmlFor='orderTime' className='ordering__label'>?????????? ?????????????????</label>
            <select
              className='ordering__input'
              onChange={changeHandler}
              value={order.orderTime}
              name='orderTime'
              type='text'
              placeholder='??????????????'>
              <option className='ordering__select' value='1'>?? ?????????????????? ??????????</option>
              <option className='ordering__select' value='2'>?????????? ?????? ????????</option>
              <option className='ordering__select' value='3'>?????????? 3 ????????</option>
            </select>
          </div>
        </form>

      </div>
      <div className='ordering__method'>
        <section className='method__header'>
          <h3 onClick={deliveryHandler} className={order.isDelivery ? 'method__title active' : 'method__title'}>????????????????</h3>
          <h3 onClick={deliveryHandler} className={order.isDelivery ? 'method__title ' : 'method__title active'}>?????????????????? (- 20%)</h3>
        </section>
        <div className='method__body'>
          <div className='method__inners'>
            <section className='method__items'>
              <h5 className='method__text'>??????????</h5>
              <h5 className='method__text'>{shopTotal} ??? </h5>
            </section>
            <section className='method__items'>
              <h5 className='method__text'>{order.isDelivery ? '????????????????' : '??????????????????'}</h5>
              <h5 className='method__text'>{order.isDelivery ? 0 + '???' : '20%'} </h5>
            </section>
          </div>
          <div className='total'>
            <h6 className='total__title'>?????????? ?? ????????????</h6>
            <h3 className='total__text'>{order.isDelivery ? shopTotal : shopTotal - promo} ???</h3>
          </div>
        </div>
      </div>
    </StyledOrder >
  );
}

export default Ordering;
