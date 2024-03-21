import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "counter",
  initialState: {
    value: "",
    options: {},
    categories: [],
    searchContent: [],
    /*This filtered Contents [0] element made on purpes like this to make sure 
    when the component first mounted the normal search content is displayed*/
    filteredSearchContent: ["this is emtpty"],
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
      state.filteredSearchContent = state.searchContent.filter(
        (product: any) => {
          return action.payload[product.category];
        },
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue, clearValue, setSearchContent, setOptions } =
  searchSlice.actions;

export default searchSlice.reducer;
