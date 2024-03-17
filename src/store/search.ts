import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "counter",
  initialState: {
    value: "",
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    clearValue: (state) => {
      state.value = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue, clearValue } = searchSlice.actions;

export default searchSlice.reducer;
