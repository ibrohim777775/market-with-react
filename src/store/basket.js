import { configureStore, createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {},
  reducers: {
    addToBasket: (basket, action) => {
      let isTrue = basket.byId && basket.byId[action.payload.id] ? true : false;
      return {
        ...basket,
        byId: {
          ...basket.byId,
          [+action.payload.id]: {
            // id: action.payload.id,
            name: action.payload.title,
            count: 1,
            price: action.payload.id / 100,
            img: action.payload.img,
          },
        },
        arr: [...(basket.arr || ""), +action.payload.id],
      };
    },
    updateTotals: (basket) => {
      let countBasket = 0;
      let priceTotal = 0;
      for (let item in basket.byId) {
        countBasket++;
        // console.log(countBasket, 'count')
        let toNumber = +item;

        priceTotal = priceTotal + toNumber / 100;
      }
      return {
        ...basket,
        total: {
          totalBasket: countBasket,
          totalPrice: priceTotal,
        },
      };
    },
    addCount: (basket, action) => {
      basket[action.payload.id].count++;
    },
    removeCount: (basket, action) => {
      basket[action.payload.id].count--;
    },
    removeFromBasket: (basket, action) => {
      delete basket[action.payload.id];
    },
  },
});

const basket = configureStore({ reducer: basketSlice.reducer });

export const {
  addToBasket,
  addCount,
  removeCount,
  removeFromBasket,
  updateTotals,
} = basketSlice.actions;
export default basket;
