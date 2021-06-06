import { configureStore, createSlice, current } from "@reduxjs/toolkit";

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
            price: Math.ceil(action.payload.id / 100),
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
        priceTotal =
          priceTotal + basket.byId[item].price * basket.byId[item].count;
      }
      // console.log(priceTotal, "priceee");
      return {
        ...basket,
        total: {
          totalBasket: countBasket,
          totalPrice: priceTotal,
        },
      };
    },
    addCount: (basket, action) => {
      basket.byId[action.payload.id].count++;
    },
    removeCount: (basket, action) => {
      basket.byId[+action.payload.id].count--;
    },
    removeFromBasket: (basket, action) => {
      let fakeById = {};

      let fakeArr = basket.arr.filter((item) => {
        return item !== +action.payload.id;
      });
      fakeArr.filter((item) => {
        if (basket.byId[item]) {
          fakeById[item] = { ...basket.byId[item] };
        }
      });

      return {
        ...basket,
        byId: { ...fakeById },
        arr: [...fakeArr],
      };
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
