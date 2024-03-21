import { createSlice } from "@reduxjs/toolkit";

interface CategoryOptions {
  [key: string]: boolean;
}

export const searchSlice = createSlice({
  name: "counter",
  initialState: {
    value: "",
    options: { Category: {} as CategoryOptions },
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
          Category: {
            ...acc.Category,
            [product.category]: true,
          },
        };
      }, {});
      state.filteredSearchContent = action.payload;
    },
    setCategoryOptions: (state, action) => {
      state.options = {
        ...state.options,
        Category: {
          ...state.options.Category,
          [action.payload.name]: action.payload.value,
        },
      };
      state.filteredSearchContent = state.searchContent.filter(
        (product: any) => state.options.Category[product.category],
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue, clearValue, setSearchContent, setCategoryOptions } =
  searchSlice.actions;

export default searchSlice.reducer;
