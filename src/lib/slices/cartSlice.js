import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  items1: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        //  state.items.push({ ...action.payload, quantity: 0});
        item.quantity += 1;
        item.total = item.quantity * item.price;
        // const itemprice= action.payload.price
        // state.amount=itemprice*item.quantity;
        // console.log(state.amount);
      }
      // if(action.payload.quantity==1)
      else {
        const t = action.payload.price * 1;
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: t,
          totalPrice: 0,
        });
      }
      // else{
      //    state.items.push({ ...action.payload, quantity: 1});
      //       const k=action.payload.price * quantity;
      //       state.items.push({ ...action.payload, quantity: 1, total: k });
      // }
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
    totalPrice: (state, action) => {
      // state.items.push({ ...action.payload, to
      // talPrice: 0 });
      const item4 = state.items.find((i) => i.id === action.payload.id);
      console.log(action.payload);
      console.log(action.payload.totalPrice);
      //  action.payload.push({ ...action.payload, totalPrice: 0 });
      for (let i = 0; i <= state.items.length; i++) {
        if (
          item4
          // state.items[i].total
        ) {
          item4.totalPrice = item4.totalPrice+state.items[i].total;
        } else {
          item4.totalPrice += state.items[i].price;
        }
      }
    },
  },

  //    total: (state, action) => {
  // let array= action.payload;
  // console.log(array);
  // for(let i=0; i<=array.length; i++){
  //    if(array[i].total){
  //    state.amount +=array[i].total;
  //     }
  //     else{
  //         state.amount +=array[i].price;
  //     }
  //  }

  //   //   // const item3 = state.items.find((i) => i.id === action.payload.id);
  //   //   // const item4=action.payload.price;
  //   //    if(action.payload.quantity){
  //   //   console.log('gio');
  //   //     const k=action.payload.price * quantity;
  //   //           state.items.push({ ...action.payload, quantity: 1, total: k });
  //   //   }
  //   //   // else {
  //   //   //   const t = action.payload.price * 1;
  //   //   //   state.items.push({ ...action.payload, quantity: 1, total: t });
  //       }

  // },
});
export const { addToCart, removeFromCart, deleteObject, totalPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
