import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Style/HeaderMenu.css";

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="header__items">
          <ul className="header__inner">
            {this.props.headerItems.map((item, index) => (
              <li key={index} className="header__links">
                <Link className="header_links-item" to={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
