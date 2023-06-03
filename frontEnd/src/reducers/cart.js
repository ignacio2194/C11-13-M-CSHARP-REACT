import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

console.log("Hola reducer")

const shopingCart = createSlice({
  name: "DATS",
  initialState,
  reducers: {
    loadCart(state, action) {
      console.log(state, action, state.data)
      state.data = action.payload;
    }
  },
});

export const { loadCart } = shopingCart.actions;
export default shopingCart.reducer;
