import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Id: 0,
};

const Idpago = createSlice({
  name: "DATS",
  initialState,
  reducers: {
    Id(state, action) {
        console.log("Hiapepepepepe")
      state.Id = action.payload;
    },
   
  },
  
});

export const { Id } = Idpago.actions;
export default Idpago.reducer;
