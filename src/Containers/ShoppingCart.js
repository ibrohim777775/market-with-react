import React, { Component, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import products from "../db/products";

import carIcon from "../Assets/images/carIcon.svg";
import pigWithCoin from "../Assets/images/pigWithDollor.svg";

import { UserConsumer, BasketContext } from "../context/basket";
import Button from "../Components/Button";
import BasketList from "../Components/BasketList";

import { ShoppingCartStyled, Btn, } from "../Style/containers/ShoppingCartStyled";
import { useDispatch, useSelector } from "react-redux";


const ShoppingCart = () => {
  const { shopCart, setShopCart, deleteItem } = useContext(BasketContext);
  const [shopTotal, setShopTotal] = useState(0);
  // static contextType UserContextComponent;
  const dispatch = useDispatch();
  const basketStore = useSelector(state => state || {});

  const basketTotal = () => {

    let sum = shopTotal;
    let sumBasket = 0;
    shopCart.map((item) => {

      sum = item.count * item.id;
      sumBasket += sum;
    });
    setShopTotal(sumBasket);
  }

  useEffect(() => {
    basketTotal();
  }, [shopCart]);



  // context.shopPriceHandler();

  // const shopCart = context.
  // const { addCount, removeCount } = context;
  // console.log(items, shopCart, "where is coming");
  return (
    // <UserConsumer>
    //   {({ addCount, removeCount,  shopCart }) => (
    <ShoppingCartStyled>
      <section className="shopping__inners">
        <h1 className="title">Корзина</h1>
        <BasketList />
      </section>
      <section className="shopping__nav">
        <section className="shopping__nav-items">
          <h3 className="shopping__nav-title">Заказ №47593</h3>
          <section className="shopping__nav-inners">
            <h6 className="shopping__nav-text">Товаров в корзине</h6>
            <h6 className="shopping__nav-price">{shopTotal} ₽ </h6>
          </section>
          <section className="shopping__nav-inners">
            <h6 className="shopping__nav-text">Промокод</h6>
            <h6 className="shopping__nav-price promo"> -100 ₽ </h6>
          </section>
          <p className="shopping__nav-all">Итого к оплате</p>
          <h4 className="shopping__count">{shopTotal} ₽</h4>
          <Link to='/ordering'>
            <Button
              text="Оформить заказ"
              width="164px"
              heigth="52px"
              fontSize="16px"
            />
          </Link>
        </section>
      </section>
      <section className="about__advertise">
        <h4 className="about__advertise-title">
          Закажите на 3000 RUB и получите
          </h4>
        <section className="about__advertise-items">
          <img className="pigWithCoin" src={pigWithCoin} />
          <h6 className="about__ad-item">30 RUB </h6>
          <p className="about__ad-text"> на бонусный счет</p>
        </section>
        <section className="about__advertise-items">
          <img className="carIcon" src={carIcon} />
          <h6 className="about__ad-item">Бесплатная доставка </h6>
        </section>
        <p className="about__ad-inner">
          {" "}
          <b>1000</b> (минимальный заказ)
          </p>
        <section className="about__range">
          <h6 className="minNum">0</h6>
          <input
            readOnly
            className="range"
            type="range"
            min="0"
            max="3000"
            value="1500"
          />
          <h6 className="minNum">3000</h6>
        </section>
        <p className="about__range-text">
          Осталось <b> 1988 RUB </b> до бесплатной доставки
          </p>
      </section>
    </ShoppingCartStyled>
  );
  // </UserConsumer>
  //   );
  // }
}

export default ShoppingCart;
