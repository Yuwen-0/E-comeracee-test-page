import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import createProductSlice from "./create-product";

export default configureStore({
  reducer: {
    search: searchSlice,
    createProduct: createProductSlice,
  },
});
