import React, { Component, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import noImg from "../Assets/images/no-image.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
// import UserContextComponent, { BasketContext } from "../context/basket";
import { addCount, addToBasket, updateTotals } from "../store/basket";

import "../Style/components/Card.css";
import { StyledCard } from "../Style/components/CardStyled";

const Card = (props) => {
  // const { shopCart, setShopCart } = useContext(BasketContext);
  const { title, img, desc, price, rate, size, sizeType } = props;
  const [text, setText] = useState("В корзину");
  const dispatch = useDispatch();
  const basket = useSelector((state) => state || {});

  const clickHandler = () => {
    // if (!shopCart.find((prod) => prod.id === props.id)) {

    //   setShopCart([...shopCart, { id: props.id, count: 1 }]);
    // }
    // console.log(props.id);

    if (!basket.byId || !basket.byId[props.id]) {
      dispatch(addToBasket(props));
      dispatch(updateTotals());
      setText("Купить");
    }
  };
  // console.log(basketStore)
  // console.log(props)
  // console.log(shopCart);

  // console.log(shopCart);
  return (
    <StyledCard>
      <div className="card__img">
        <Link to={`${props.id}/product-info`}>
          <img src={img ? img : noImg} />
        </Link>
      </div>
      <div className="card__title">
        <h4 className="card__title-text"> {title} </h4>
      </div>
      <div className="card__text">
        <p className="text__inner">{desc}</p>
      </div>
      <div className="card__rate">
        <AiFillStar className="star" />
        <AiFillStar className="star" />
        <AiFillStar className="star" />
        <AiFillStar className="star" />
        <AiFillStar className="star unlike" />
      </div>
      <div className="card__price">
        <h6 className="price__item">{price} ₽/кг</h6>
        <p className="price__inner">
          За {size} {sizeType}.
        </p>
      </div>
      {/* <Link to={id + '/product-info'}> */}

      <Button onClick={clickHandler} className="card__btn" text={text} />

      {/* </Link> */}
    </StyledCard>
  );
};

export default Card;
