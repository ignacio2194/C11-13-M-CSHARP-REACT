import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const imgCategories = createSlice({
  name: "DATS",
  initialState,
  reducers: {
    takeImg(state, action) {
      console.log(state, action, 'iapepepe')
      state.data = action.payload;

    },
  },
});

export const { takeImg } = imgCategories.actions;
export default imgCategories.reducer;
