import { createSlice } from "@reduxjs/toolkit";

export const createProductSlice = createSlice({
  name: "createProduct",
  initialState: {
    name: "",
    description: "",
    shortDescription: "",
    category: "",
    subcategory: "",
    brand: "",
    sku: "",
    price: 0,
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
  },
});

export const { setImage } = createProductSlice.actions;
export default createProductSlice.reducer;
