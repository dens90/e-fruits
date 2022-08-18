import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalItem: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.totalItem += 1;
      const fruitExist = state.cart.findIndex(
        (fruit) => fruit.name === action.payload.name
      );
      if (fruitExist >= 0) {
        state.cart[fruitExist].quantity += 1;
        console.log(typeof action.payload.price);
        state.cart[fruitExist].price =
          Number(action.payload.price.replace(/,/g, ".")) *
          state.cart[fruitExist].quantity;
        console.log(typeof state.cart[fruitExist].price);
      } else {
        const price = Number(action.payload.price.replace(/,/g, ".")).toFixed(
          2
        );
        state.cart.push({ ...action.payload, newPrice: price });
      }
      state.totalPrice = state.cart
        .map((price) => {
          return Number(price.price);
        })
        .reduce((a, b) => a + b, 0);
    },
    removeCart: (state, action) => {
      state.totalItem -= 1;
      const fruitExist = state.cart.findIndex(
        (fruit) => fruit.cartId === action.payload.cartId
      );
      if (fruitExist >= 0) {
        state.cart[fruitExist].quantity -= 1;
        state.cart[fruitExist].price =
          Number(state.cart[fruitExist].newPrice.replace(/,/g, ".")) *
          state.cart[fruitExist].quantity;
        if (state.cart[fruitExist].quantity === 0) {
          state.cart.splice(fruitExist, 1);
        }
      }

      state.totalPrice = state.cart
        .map((price) => {
          return Number(price.price);
        })
        .reduce((a, b) => a + b, 0);
    },

    resetCart: (state) => {
      state.cart = [];
      state.totalItem = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
export const productInCart = (state) => state.cart.cart;
export const { removeCart } = cartSlice.actions;
export const totalProducts = (state) => state.cart.totalItem;
export const totalSumPrices = (state) => state.cart.totalPrice;
export const { resetCart } = cartSlice.actions;
