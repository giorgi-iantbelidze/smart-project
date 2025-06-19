import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.total = item.quantity * item.price;
      } else {
        const t = action.payload.price * 1;
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: t,
          totalPrice: 0,
        });
      }
    },
    removeFromCart: (state, action) => {
      const item1 = state.items.find((i) => i.id === action.payload.id);
      if (item1.quantity == 0) {
        item1.quantity = 0;
        item1.total = 0;
      } else {
        item1.quantity -= 1;
        item1.total = item1.quantity * item1.price;
      }
    },
    deleteObject: (state, action) => {
      const index = action.payload.id;
      for (let i = 0; i < state.items.length; i++) {
        if (index == state.items[i].id) {
          state.items.splice(i, 1);
        }
      }
    },
  },
});
export const { addToCart, removeFromCart, deleteObject,  } =
  cartSlice.actions;
export default cartSlice.reducer;
