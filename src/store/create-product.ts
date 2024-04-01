import { createSlice } from "@reduxjs/toolkit";

export const createProductSlice = createSlice({
  name: "createProduct",
  initialState: {
    name: "This is the name of the product",
    description: "",
    shortDescription: "",
    category: "",
    subcategory: "",
    brand: "",
    sku: "",
    price: [0, 0],
    salePrice: 0,
    currency: "",
    inventoryLevel: 0,
    weight: 0,
    dimensions: "",
    color: "",
    material: "",
    features: "",
    technicalSpecs: "",
    image: "",
    videoUrl: "",
  } as ProductData,
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
  },
});

export const { setImage, setName, setPrice, setCurrency } =
  createProductSlice.actions;
export default createProductSlice.reducer;