import React, { Component, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Advertise from "../Components/Advertise";
import Card from "../Components/Card";
import MainPresent from "../Components/MainPresent";
import MenuList from "../Components/MenuList";
import Pagination from "../Components/Pagination";
import UserContextComponent from "../context/basket";
import products from "../db/products";
import "../Style/containers/main.css";

const Main = () => {
  const allItems = ["Все товары", "Все товары категории"];
  const [items, setItems] = useState([]);
  const basketStore = useSelector((state) => state || []);
  const [area, setArea] = useState("American");

  const fetchItems = (area) => {
    fetch(`https://themealdb.p.rapidapi.com/filter.php?a=${area}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3263a16283msh6bfe5b19d610724p10ba1ejsn213622b85edc",
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log(res);
        setItems([...res.meals]);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // console.log(items, 'items')
  useEffect(() => {
    fetchItems(area);
  }, [area]);

  // console.log(basketStore);
  // console.log(area, "area");
  return (
    <div>
      <MainPresent />
      <MenuList area={area} setArea={setArea} />
      <h1>{allItems[0]}</h1>
      <section className="cards">
        {items.map((item, index) => (
          <Card
            key={item.idMeal}
            id={item.idMeal}
            title={item.strMeal}
            img={item.strMealThumb}
            desc="Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить."
            price={item.idMeal / 100}
            rate={Math.random * 10}
            size={1}
            sizeType="kg"
          />
        ))}
      </section>
      <section className="pagination">
        <Pagination />
      </section>

      <section className="main__video">
        {/* <iframe
          width="100%"
          height="950px"
          src="https://www.youtube.com/embed/MtcVETXsqLQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      </section>
      <Advertise />
    </div>
  );
};

export default Main;
