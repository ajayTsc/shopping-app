import { createSlice } from '@reduxjs/toolkit';

const savedCart = typeof window !== 'undefined'
  ? JSON.parse(localStorage.getItem('cart')) || {
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,
    }
  : {
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,
    };

const initialState = savedCart;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  
    addToCart: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
      localStorage.setItem('cart', JSON.stringify(state)); 
    },

    removeFromCart: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
        localStorage.setItem('cart', JSON.stringify(state)); 
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(i => i.id === id);
      if (item) {
        state.totalQuantity += quantity - item.quantity;
        state.totalPrice += (quantity - item.quantity) * item.price;
        item.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(state)); 
      }
    },
    clearCart: state => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem('cart'); 
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
