import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "counter",
  initialState: {
    value: "",
    options: {},
    categories: [],
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
      state.categories = action.payload.map((product: any) => product.category);
      state.options = action.payload.reduce((acc: any, product: any) => {
        return {
          ...acc,
          [product.category]: true,
        };
      }, {});
    },
    setOptions: (state, action) => {
      state.options = {
        ...state.options,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue, clearValue, setSearchContent, setOptions } =
  searchSlice.actions;

export default searchSlice.reducer;
