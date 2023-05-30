import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  dish: [],
};

const imgCategories = createSlice({
  name: "DATS",
  initialState,
  reducers: {
    takeImg(state, action) {
      state.data = action.payload;
    },
    takeDish(state, action) {
        state.dish = action.payload;
      },
  },
});

export const { takeImg, takeDish } = imgCategories.actions;
export default imgCategories.reducer;
