import React, { useState } from "react";
import User from "./user";

export const BasketContext = React.createContext();

const BasketContextComponent = ({ children }) => {
  const [shopCart, setShopCart] = useState([]);
  const [display, setDisplay] = useState('flex');

  // const [shopPrice, setShopPrice] = useState(0);
  // const [promoCod, setPromoCod] = useState(100);

  // console.log("context rerendered");
  const addCount = (id) => {
    const fake = shopCart.filter(product => product.id !== id);
    const item = shopCart.filter(product => product.id === id);
    item[0].count++;
    // console.log(item);
    setShopCart([...fake, ...item]);
    // console.log(shopCart)
  }
  const removeCount = (id) => {
    const fake = shopCart.filter(product => product.id !== id);
    const item = shopCart.filter(product => product.id === id);
    item[0].count--;
    // console.log(item);
    setShopCart([...fake, ...item]);
  }
  const deleteItem = (id) => {
    console.log(id, 'deleted id')
    const fake = shopCart.filter(product => product.id !== id);
    console.log(...fake, 'new shoplist')
    setShopCart([...fake]);
    setDisplay('block');
  }
  // console.log(shopCart, 'context')
  return (
    <BasketContext.Provider value={{ shopCart, setShopCart, deleteItem, addCount, removeCount, display }}>
      <User>
        {children}
      </User>
    </BasketContext.Provider>
  );
};

export default BasketContextComponent;
