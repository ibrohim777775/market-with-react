import React, { Component, useContext, useEffect, useState } from "react";
import noImg from "../Assets/images/no-image.svg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiShoppingCart } from 'react-icons/fi';
import CounterForCard from "../Components/CounterForCard";
import products from "../db/products";
import Button from "../Components/Button";
import userAvatar from '../Assets/images/user-avatar.svg';
import commentsImg from '../Assets/images/comments.svg'
import pigWithCoin from '../Assets/images/pigWithDollor.svg';
import carIcon from '../Assets/images/carIcon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link, useParams } from "react-router-dom";
import Advertise from "../Components/Advertise";
import AddComment from "../Components/AddComment";
import { useDispatch, useSelector } from "react-redux";
import { BasketContext } from "../context/basket";
import { addToBasket } from "../store/basket";

import 'react-tabs/style/react-tabs.css';
import { StyledDiv } from "../Style/containers/AboutProductStyled.js";

function AboutProduct() {
  const { shopCart, setShopCart } = useContext(BasketContext);
  // const [productId, setProductId] = useState();
  const [text, setText] = useState('В корзину');
  const [item, setItem] = useState({})
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const basketStore = useSelector(state => state || [])


  const getProductInfo = (id) => {
    fetch(`https://themealdb.p.rapidapi.com/lookup.php?i=${id}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3263a16283msh6bfe5b19d610724p10ba1ejsn213622b85edc",
        "x-rapidapi-host": "themealdb.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(res => {
        // console.log(res);
        setItem({ ...res.meals[0] })
        // console.log(item, 'itemmm')
      })
      .catch(err => {
        console.error(err);
      });
  }
  const id = useParams().id;
  useEffect(() => {
    getProductInfo(id);
  }, []);


  const [displayIsNone, setDisplay] = useState(false);
  const addToBasket = () => {
    // if (!shopCart.find((prod) => prod.id === id)) {
    //   setShopCart([...shopCart, { id: id, count: count }]);
    // }
    const payload = {
      id,
      name: item.strMeal,
      img: item.strMealThumb,
      price: id,
      count
    };
    dispatch(addToBasket(payload))
    setText('Оформлять');


  };
  // console.log(shopCart)

  const clickHandler = () => {
    setDisplay({ displayIsNone: !displayIsNone });
  }
  const addCount = () => {
    setCount(count + 1)
  }
  const removeCount = () => {
    setCount(count - 1)
  }
  const rate = 4;
  const { strMealThumb, strMeal, idMeal } = item;
  // { console.log(id, 'idd') }
  return (
    <StyledDiv className="about__body">
      <AddComment item={displayIsNone} clickHandler={clickHandler} />
      <section className="about__product">
        <section className="product__img">
          <img className="no-img" src={strMealThumb ? strMealThumb : noImg} />
        </section>
        <section className="product__items">
          <h2 className="product__title">{strMeal} 1</h2>
          <section className="product__rate">
            <AiFillStar className="product__star" />
            <AiFillStar className={rate > 1 ? "product__star" : "product__star no__star"} />
            <AiFillStar className={rate > 2 ? "product__star" : "product__star no__star"} />
            <AiFillStar className={rate > 3 ? "product__star" : "product__star no__star"} />
            <AiFillStar className={rate > 4 ? "product__star" : "product__star no__star"} />
          </section>
          <div className="product__inners">
            <h6 className="comment__text"> Кол-во отзывов: 23 </h6>
            {/* <h5 className="comment__number">23</h5> */}
          </div>
          <div className="product__inners">
            <h6 className="product__text">Цена за уп.</h6>
            <h5 className="product__cost">{idMeal} ₽</h5>
          </div>
          <div className="product__inners">
            <h6 className="product__text">Кол-во шт в упаковке</h6>
            <h5 className="product__cost">1 </h5>
          </div>
          <div className="product__inners">
            <h6 className="product__text">Количество</h6>
            <span className='product__counter'>
              <button
                disabled={count === 1}
                onClick={removeCount}
                className="counter__btn"
              >
                -
               </button>
              <h4 className="counter__title">{count} шт</h4>
              <button onClick={addCount} className="counter__btn">
                +
        </button>
            </span>
            {/* <CounterForCard id={id} /> */}
          </div>
          <div className='product__inners'>
            <h4 className='card__price-title'>Итого к оплате</h4>
            <h3 className='cerd__price'>{count * idMeal} ₽</h3>
          </div>
          <div className='product__inners'>
            {text === 'В корзину'
              ? <Button onClick={addToBasket} width='194px' height='40px' text={text} />
              :
              <Link to='/shopping-cart'>
                <Button onClick={addToBasket} width='194px' height='40px' text={text} />

              </Link>
            }
            {/* <Link to='/shopping-cart'> */}

            {/* </Link> */}
            <div className='to__basket-icon'>
              <Button fontSize='21px' width='48px' height='40px' pad='0' text={<FiShoppingCart />} />
            </div>
          </div>
        </section>
      </section>
      <section className='product__info'>
        <section className='product__info-body'>

          <Tabs>
            <TabList className='tab__list'>
              <Tab> О товаре</Tab>
              <Tab> Параметры</Tab>
              <Tab>Отзывы </Tab>
            </TabList>

            <TabPanel className='info__items'>
              <h2 className='tab__body-title'>Описание</h2>
              <p className='tab__text'>
                Полутвердый пластичный однородный сыр, слегка ломкий на изгибе. Пажитник придает легкое ореховое послевкусие. В Италии считается столовым сыром, который подходит к любому времени суток и к любому блюду и к вину
                  <br />
                <br />
                  Вес головки 500 г. +/-10%. Цена за 1 кг.
                  <br />
                <br />
                  Продукция компании Alpenville изготовлена преимущественно из  <br /> Шарангского молока
                </p>
            </TabPanel>
            <TabPanel className='info__others'>
              <div className='info_others-items'>
                <p className='info__others-text'>Калории:</p>
                <p className='info__others-number'>420</p>
              </div>
              <div className='info_others-items'>
                <p className='info__others-text'>Жиры:</p>
                <p className='info__others-number'>54</p>
              </div>
              <div className='info_others-items'>
                <p className='info__others-text'>Белки:</p>
                <p className='info__others-number'>27</p>
              </div>
              <div className='info_others-items'>
                <p className='info__others-text'>Углеводы:</p>
                <p className='info__others-number'>18</p>
              </div>
              <div className='info_others-items'>
                <p className='info__others-text'>Масса:</p>
                <p className='info__others-number'>500 грамм</p>
              </div>
            </TabPanel>
            <TabPanel className='comments'>
              <h3 className='comments__title'>Отзывы</h3>
              <section className='comments__inners'>
                <section className='comment__card'>
                  <section className='comment__card-inners'>
                    <img className='comment__user-avatar' src={userAvatar} />
                    <section className='comment__user-info'>
                      <h5 className='comment__user-name'>Анатолий Петров</h5>
                      <section className='comment__user-rate'>
                        <AiFillStar className="product__star" />
                        <AiFillStar className="product__star" />
                        <AiFillStar className="product__star" />
                        <AiFillStar className="product__star" />
                        <AiFillStar className="product__star" />
                      </section>
                      <Link className='comment__user-prof' to='#'>vk.com/anatoliy</Link>
                    </section>
                    <img className='comment__img' src={commentsImg} />
                  </section>
                  <section className='comment__body'>
                    <p className='comment__text'>
                      Заказал 5кг мяса, живу в Московской области. Как и обещал оператор, привезли через 1,5 часа. Свежее, как будто было живое еще по дороге. Действительно натуральные продукты. Я обязательно буду заказывать дальше. А теперь подробнее о плюсах и минусах всего магази...
                      </p>
                    <Link to='#' className='read__all'>Читать полностью</Link>
                  </section>
                </section>
                <section className='comment__card'>
                  <section className='comment__card-inners'>
                    <img className='comment__user-avatar' src={userAvatar} />
                    <section className='comment__user-info'>
                      <h5 className='comment__user-name'>Анатолий Петров</h5>
                      <section className='comment__user-rate'>
                        <AiFillStar className="product__star" />
                        <AiFillStar className="product__star" />
                        <AiFillStar className="product__star" />
                        <AiFillStar className="product__star" />
                        <AiFillStar className="product__star" />
                      </section>
                      <Link className='comment__user-prof' to='#'>vk.com/anatoliy</Link>
                    </section>
                    <img className='comment__img' src={commentsImg} />
                  </section>
                  <section className='comment__body'>
                    <p className='comment__text'>
                      Заказал 5кг мяса, живу в Московской области. Как и обещал оператор, привезли через 1,5 часа. Свежее, как будто было живое еще по дороге. Действительно натуральные продукты. Я обязательно буду заказывать дальше. А теперь подробнее о плюсах и минусах всего магази...
                      </p>
                    <Link to='#' className='read__all'>Читать полностью</Link>
                  </section>
                </section>
                <Link className='more__comments' to='#'>Еще </Link>
              </section>
              <section className='comments__inners'>
                <Button onClick={() => clickHandler()} text='Добавить отзыв' width='125px' height='40px' fontSize='12px' />
              </section>
            </TabPanel>
          </Tabs>
        </section>
        <section className='about__advertise'>
          <h4 className='about__advertise-title'>Закажите на 3000 RUB и получите</h4>
          <section className='about__advertise-items'>
            <img className='pigWithCoin' src={pigWithCoin} />
            <h6 className='about__ad-item'>30 RUB </h6>
            <p className='about__ad-text'>на бонусный счет</p>
          </section>
          <section className='about__advertise-items'>
            <img className='carIcon' src={carIcon} />
            <h6 className='about__ad-item'>Бесплатная доставка </h6>
          </section>
          <p className='about__ad-inner'> <b>1000</b> (минимальный заказ)</p>
          <section className='about__range'>
            <h6 className='minNum'>0</h6>
            <input className='range' readOnly type='range' min='0' max='3000' value='1500' />
            <h6 className='minNum'>3000</h6>
          </section>
          <p className='about__range-text'>Осталось <b> 1988 RUB </b> до бесплатной доставки</p>
        </section>
      </section>
      <Advertise />
    </StyledDiv>
  );
}

export default AboutProduct;
