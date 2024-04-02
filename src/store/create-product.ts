import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/main";

export const createProductSlice = createSlice({
  name: "createProduct",
  initialState: {
    id: 0,
    name: "This is the name of the product",
    description: null,
    shortDescription: "",
    category: "",
    subcategory: "",
    price: [0, 0],
    salePrice: null,
    currency: "",
    weight: 0,
    dimensions: "",
    features: [],
    image: "",
    availability: "available",
    ratings: null,
    numberOfReviews: null,
    seoTitle: "",
    seoDescription: null,
    metaKeywords: "",
    createdAt: new Date(),
    updatedAt: null,
  } as Product,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPrice: (state, action: { payload: number }) => {
      state.price = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {
  setImage,
  setName,
  setPrice,
  setCurrency,
  setDescription,
  setCategory,
} = createProductSlice.actions;
export default createProductSlice.reducer;
