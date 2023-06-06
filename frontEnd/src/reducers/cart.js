import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const shopingCart = createSlice({
  name: "DATS",
  initialState,
  reducers: {
    loadCart(state, action) {
     console.log("PUTA MADREEEEEEEE")
      state.data = action.payload;
    },
    clearCarts(state, action){

      console.log(state.data, "mierda")
      state.data = action.payload
      console.log(state.data)
    }
  },
  
});

export const { loadCart, clearCarts } = shopingCart.actions;
export default shopingCart.reducer;
