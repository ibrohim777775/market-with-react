import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from '../Style/components/MenuListStyled';
import { IoIosArrowForward } from 'react-icons/io';

const MenuList = () => {


  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState('nowrap')

  useEffect(() => {
    fetch("https://themealdb.p.rapidapi.com/list.php?a=list", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3263a16283msh6bfe5b19d610724p10ba1ejsn213622b85edc",
        "x-rapidapi-host": "themealdb.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(res => {
        // console.log(res.meals)
        setItems([...res.meals])
      })

      .catch(err => {
        console.error(err);
      });
  }, []);

  const itemsHandler = () => {
    showItems === 'nowrap' ? setShowItems('wrap') : setShowItems('nowrap');
    console.log('bosildi')
  }
  // console.log(items, 'items')
  return (
    <StyledDiv style={{ flexWrap: showItems }}>

      {items.map((item, index) => (
        <Link to={'/home/' + item.strArea} key={index} href='#'>{item.strArea}</Link>
      ))}
      <IoIosArrowForward onClick={itemsHandler} className='arrow__right' />
    </StyledDiv>
  );
}

export default MenuList;
