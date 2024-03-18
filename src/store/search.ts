import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "counter",
  initialState: {
    value: "",
    searchContent: [],
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    clearValue: (state) => {
      state.value = "";
    },
    setSearchContent: (state, action) => {
      state.searchContent = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue, clearValue, setSearchContent } = searchSlice.actions;

export default searchSlice.reducer;
