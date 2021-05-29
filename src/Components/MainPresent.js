import React, { Component } from "react";
import { StyledMain } from "../Style/containers/StyledMainPresent";
import "../Style/components/mainPresent.css";
import Button from "./Button";
import BgFor from "../Assets/images/header_bg.svg";

class MainPresent extends Component {
  render() {
    return (
      <StyledMain>
        <div className="main__bg">
          <div className="main__bg-items">
            <h2 className="main__bg-title">Подарок на первый заказ.</h2>
            <p className="main__bg-text">
              Получите 500 рублей за подписку на рассылку
            </p>
            <Button
              width="217px"
              height="52px"
              fontSize="25px"
              text="Подписаться"
            ></Button>
          </div>
          <div className="main__bg-img">
            <img src={BgFor} width="411px" height="254px" />
          </div>
        </div>
      </StyledMain>
    );
  }
}

export default MainPresent;
