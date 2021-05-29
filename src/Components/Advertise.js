import React, { Component } from "react";
import "../Style/components/Advertise.css";
import Button from "./Button";
import car from "../Assets/images/car.svg";

class Advertise extends Component {
  render() {
    return (
      <div className="advertise">
        <div className="advertise__inners">
          <p className="advertise__title">
            Бесплатная доставка по Москве и Области от 2999 RUB!
          </p>
          <div className="advertise__btn">
            <Button text="Оформить" width="171px" height="52px" />
          </div>
        </div>
        <div className="advertise__item">
          <img src={car} />
        </div>
      </div>
    );
  }
}

export default Advertise;
