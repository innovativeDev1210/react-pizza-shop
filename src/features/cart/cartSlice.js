import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const findPizza = (state, action) =>
  state.cart.find((pizza) => pizza.pizzaId === action.payload.pizzaId);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action) {
      const pizza = findPizza(state, action);
      if (pizza) {
        pizza.quantity = pizza.quantity + 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    deletePizza(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increasePizzaQuantity(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decreasePizzaQuantity(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity--;
      if (pizza.quantity === 0) {
        cartSlice.caseReducers.deletePizza(state, action);
      } else {
        pizza.totalPrice = pizza.quantity * pizza.unitPrice;
      }
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addPizza,
  deletePizza,
  increasePizzaQuantity,
  decreasePizzaQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce(
    (total, item) => (total += item.unitPrice * item.quantity),
    0,
  );

// Recieves id from useSelector hook
export const getPizzaById = (id) => (state) =>
  state.cart.cart.find((pizza) => pizza.pizzaId === id);
