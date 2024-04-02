import { createSlice } from "@reduxjs/toolkit";

export const createProductSlice = createSlice({
  name: "createProduct",
  initialState: {
    id: 0,
    name: "This is the name of the product",
    description: "",
    shortDescription: "This is the short description of the product",
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
  } as unknown as Product,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPrice: (state, action: { payload: number[] }) => {
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
    setShortDescription: (state, action) => {
      state.shortDescription = action.payload;
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
  setShortDescription,
} = createProductSlice.actions;
export default createProductSlice.reducer;
