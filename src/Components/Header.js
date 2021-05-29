import React, { Component, useContext, useEffect, useState } from "react";
import { BiPhone, BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import HeaderMenu from "../Components/HeaderMenu";
import Logo from "../Components/Logo";
import Burger from "../Assets/images/Burger.svg";

import { BasketContext } from "../context/basket";
import "../Style/Header.css";

const Header = (props) => {
  const { shopCart, setShopCart } = useContext(BasketContext);
  const [total, setTotal] = useState(0);
  // console.log(shopCart, "headerdan");
  useEffect(() => {
    setTotal(shopCart.length);
    // console.log("ishladiii", total);
  }, [shopCart]);
  // console.log(shopCart, "cominnnggg");
  // console.log(this.context, "header is coming");
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__body">
            <img className="burger" src={Burger}></img>
            <Logo />
            <HeaderMenu headerItems={props.headerItems} />
            <div className="header__info">
              <div className="info__phone">
                <BiPhone className="icon__phone" />
                <p className="phone__number">+7 (831) 282-60-00</p>
              </div>
              <div className="user__login">
                <BiUser
                  onClick={() => props.showAuth()}
                  className="user__icon mr"
                />
              </div>
              <div className="shopping__cart" >
                <Link to='/shopping-cart'>
                  <FiShoppingCart className="user__icon shopping__icon" />
                  <p className='basket__total'>{total}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
