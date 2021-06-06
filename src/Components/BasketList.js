import React, { useContext, useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import CounterForCard from "../Components/CounterForCard";
import { BasketContext } from "../context/basket";

import products from "../db/products";
import { removeFromBasket, updateTotals } from "../store/basket";

import { StyledDiv, Btn } from "../Style/components/BasketListStyled";

const BasketList = () => {
  const { shopCart, setShopCart, deleteItem, display } =
    useContext(BasketContext);
  // const [isTrue, setIsTrue] = useState(false);
  const dispatch = useDispatch();
  const store = useSelector((state) => state || {});
  // let items = [];
  // const [items, setItems] = useState([]);

  // const [fake, setFake] = useState(0);

  // useEffect(() => {}, [fake]);

  const removeCount = (item) => {
    dispatch(removeFromBasket({ id: item }));
    dispatch(updateTotals());
  };

  // const fetchData = async (id) => {
  //   try {
  //     let dat = await fetch(`https://themealdb.p.rapidapi.com/lookup.php?i=${id}`, {
  //       "method": "GET",
  //       "headers": {
  //         "x-rapidapi-key": "3263a16283msh6bfe5b19d610724p10ba1ejsn213622b85edc",
  //         "x-rapidapi-host": "themealdb.p.rapidapi.com"
  //       }

  //     })
  //     dat.json().then(item => {
  //       let fake = items;
  //       fake.push(item.meals[0])
  //       setItems(fake);
  //       // setIsTrue(!isTrue);
  //       shopCart.length === items.length && setIsTrue(!isTrue);
  //       // console.log(item.meals[0], 'itemmmm')
  //       // console.log(items, 'itemssss')
  //     })
  //     // console.log(dat.json().then, 'asyn')
  //   } catch (error) {
  //     console.log(error, 'errorrrr')
  //   }

  // }
  // const updateItems = () => {
  //   shopCart.map((item) => {
  //     fetchData(item.id);

  //     console.log(item.id, 'iddd')

  //   })
  // }

  // useEffect(() => {
  //   updateItems();
  // }, []);
  // console.log(store.arr);
  return (
    <StyledDiv>
      {store.arr ? (
        <section className="shopping__items">
          {store.arr &&
            store.arr.map((item) => (
              <section
                key={item}
                className="shopping__product"
                // style={{ display: "block" }}
              >
                <Btn>
                  <IoClose
                    onClick={() => removeCount(item)}
                    className="product__remove-from"
                  />
                </Btn>
                <section className="product__img">
                  <img src={store.byId[item].img} />
                </section>
                <h4 className="product__title">{store.byId[item].name}</h4>
                <CounterForCard
                  id={item}
                  // addCount={add}
                  // removeCount={del}
                  className="product__counter"
                />
                <h6 className="product__price">
                  {store.byId[item].price * store.byId[item].count} ₽
                </h6>
              </section>
            ))}
        </section>
      ) : (
        <h1>Корзина пусть</h1>
      )}
    </StyledDiv>
  );
};

export default BasketList;

// <div>
//   <section
//     key={index}
//     className="shopping__product"
//     style={{ display: { display } }}
//   >
//     <Btn>
//       <IoClose
//         onClick={() => deleteItem(item.id)}
//         className="product__remove-from"
//       />
//     </Btn>
//     <section className="product__img">
//       <img src={item.strMealThumb} />
//     </section>
//     <h4 className="product__title">{item.title}</h4>
//     <CounterForCard
//       id={item.id}
//       // addCount={add}
//       // removeCount={del}
//       className="product__counter"
//     />
//     <h6 className="product__price">
//       {item.price * shopCart.find((list) => list.id === item.id)?.count} ₽{" "}
//     </h6>
//   </section>
// </div>;
