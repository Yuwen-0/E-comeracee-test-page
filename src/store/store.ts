import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";

export default configureStore({
  reducer: {
    search: searchSlice,
  },
});
