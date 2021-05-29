import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.svg";
import "../Style/Logo.css";

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/home">
          <img className="logo__img" src={logo}></img>
        </Link>
      </div>
    );
  }
}

export default Logo;
