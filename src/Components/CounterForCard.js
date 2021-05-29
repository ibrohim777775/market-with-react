import React, { Component, useContext, useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { BasketContext } from "../context/basket";
import products from "../db/products";
import { CounterStyled } from "../Style/components/CounterForCardStyled";

const CounterForCard = ({ id }) => {
  const { shopCart, addCount, removeCount } = useContext(BasketContext);
  const [item, setItem] = useState({});
  useEffect(() => {
    const prod = shopCart.filter(product => product.id === id);
    // console.log(prod)
    setItem({ ...prod })
  }, []);
  // console.log(item, 'itemmm')
  // console.log(shopCart, 'counter shopcart')
  // console.log(this.props, "card row itemmmm");
  return (
    <CounterStyled >
      <button
        disabled={item.count === 1}
        onClick={() => removeCount(id)}
        className="counter__btn"
      >
        -
        </button>
      <h4 className="counter__title">{item.count} </h4>
      <button onClick={() => addCount(id)} className="counter__btn">
        +
        </button>
    </CounterStyled >
  );
}

export default CounterForCard;
