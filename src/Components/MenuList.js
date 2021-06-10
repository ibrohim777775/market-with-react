import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import { StyledDiv } from "../Style/components/MenuListStyled";

const MenuList = ({ area, setArea }) => {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState("nowrap");
  const [activeColor, setActiveColor] = useState();
  const [active, setActive] = useState("");

  useEffect(() => {
    fetch("https://themealdb.p.rapidapi.com/list.php?a=list", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3263a16283msh6bfe5b19d610724p10ba1ejsn213622b85edc",
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log(res.meals)
        setItems([...res.meals]);
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);
  const clickHandler = (item) => {
    // console.log("bosildi menyu", item);
    setArea(item);
    setActive("active__menu");
    // setActiveColor("var(--green)");
  };

  const itemsHandler = () => {
    showItems === "nowrap" ? setShowItems("wrap") : setShowItems("nowrap");
    console.log("bosildi");
  };
  // console.log(items, 'items')
  return (
    <StyledDiv style={{ flexWrap: showItems }}>
      {items.map((item, index) => (
        <h5
          className={""}
          onClick={() => clickHandler(item.strArea)}
          // style={{ color: activeColor }}
          // to={"/home/" + item.strArea}
          key={index}
          // href="#"
        >
          {item.strArea}
        </h5>
      ))}
      <IoIosArrowForward onClick={itemsHandler} className="arrow__right" />
    </StyledDiv>
  );
};

export default MenuList;
