import React, { Component, useContext, useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { BasketContext } from "../context/basket";
import products from "../db/products";
import {
  addCount,
  removeCount,
  addToBasket,
  updateTotals,
} from "../store/basket";

import { CounterStyled } from "../Style/components/CounterForCardStyled";

const CounterForCard = (item) => {
  const store = useSelector((state) => state || {});
  const dispatch = useDispatch();
  // const { shopCart, addCount, removeCount } = useContext(BasketContext);
  // const [item, setItem] = useState({});
  // useEffect(() => {
  //   const prod = shopCart.filter(product => product.id === id);
  //   // console.log(prod)
  //   setItem({ ...prod })
  // }, []);
  // console.log(item, 'itemmm')
  // console.log(shopCart, 'counter shopcart')
  // console.log(this.props, "card row itemmmm");
  // console.log(item.id, "byid count");
  const addCounter = (item) => {
    dispatch(addCount(item));
    dispatch(updateTotals());
  };
  const removeCounter = (item) => {
    dispatch(removeCount(item));
    dispatch(updateTotals());
  };
  return (
    <CounterStyled>
      <button
        disabled={store.byId[item.id].count === 1}
        onClick={() => removeCounter(item)}
        className="counter__btn"
      >
        -
      </button>
      <h4 className="counter__title">{store.byId[item.id].count} </h4>
      <button onClick={() => addCounter(item)} className="counter__btn">
        +
      </button>
    </CounterStyled>
  );
};

export default CounterForCard;
