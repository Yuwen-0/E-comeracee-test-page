import { createSlice } from "@reduxjs/toolkit";

interface Options {
  [key: string]: boolean;
}
interface SearchState {
  value: string;
  options: { [key: string]: Options };
  values: { [key: string]: any[] };
  searchContent: any[];
  filteredSearchContent: any[];
}

export const searchSlice = createSlice({
  name: "counter",
  initialState: {
    value: "",
    options: { Category: {}, Price: {} },
    values: { Category: [], Price: [] },
    searchContent: [],
    /*This filtered Contents [0] element made on purpes like this to make sure 
    when the component first mounted the normal search content is displayed*/
    filteredSearchContent: ["this is emtpty"],
  } as SearchState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    clearValue: (state) => {
      state.value = "";
    },
    setSearchContent: (state, action) => {
      state.searchContent = action.payload;
      state.values.Category = action.payload
        .map((product: any) => product.category)
        .sort()
        .reduce((acc: any, product: any) => {
          if (!acc.includes(product)) acc.push(product);
          return acc;
        }, []);
      state.values.Price = action.payload
        .map((product: any) => {
          if (product.price >= 0 && product.price <= 100) return "0 - 100";
          if (product.price > 100 && product.price <= 200) return "100 - 200";
          if (product.price > 200 && product.price <= 300) return "200 - 300";
          if (product.price > 300 && product.price <= 400) return "300 - 400";
          if (product.price > 400 && product.price <= 500) return "400 - 500";
          if (product.price > 500 && product.price <= 1000) return "500 - 1000";
          if (product.price > 1000 && product.price <= 2000)
            return "1000 - 2000";
          if (product.price > 2000 && product.price <= 3000)
            return "2000 - 3000";
          if (product.price > 3000 && product.price <= 4000)
            return "3000 - 4000";
          if (product.price > 4000 && product.price <= 5000)
            return "4000 - 5000";
          return "5000+";
        })
        .sort()
        .reduce((acc: any, product: any) => {
          if (!acc.includes(product)) acc.push(product);
          return acc;
        }, []);

      state.options = {
        ...state.options,
        Category: state.values.Category.reduce(
          (acc: any, value: any) => ({ ...acc, [value]: true }),
          {},
        ),
        Price: state.values.Price.reduce(
          (acc: any, value: any) => ({ ...acc, [value]: true }),
          {},
        ),
      };
    },

    setCategoryOptions: (state, action) => {
      state.options = {
        ...state.options,
        Category: {
          ...state.options.Category,
          [action.payload.name]: action.payload.value,
        },
      };
      setFilteredSearchContent(state);
    },

    setPriceOptions: (state, action) => {
      state.options = {
        ...state.options,
        Price: {
          ...state.options.Price,
          [action.payload.name]: action.payload.value,
        },
      };

      setFilteredSearchContent(state);
    },
  },
});

const setFilteredSearchContent = (state: SearchState) => {
  const selectedCategories = Object.keys(state.options.Category).filter(
    (category) => state.options.Category[category] === true,
  );
  const selectedPrices = Object.keys(state.options.Price).filter(
    (price) => state.options.Price[price] === true,
  );

  state.filteredSearchContent = state.searchContent.filter((product) => {
    let categoryMatch = true;
    let priceMatch = true;

    if (selectedCategories.length > 0) {
      categoryMatch = selectedCategories.includes(product.category);
    }

    if (selectedPrices.length > 0) {
      priceMatch = selectedPrices.some((price) => {
        const [min, max] = price.split(" - ");
        const productPrice = product.price;
        if (min === "5000+" && productPrice >= 5000) return true;
        return (
          productPrice >= parseInt(min, 10) && productPrice <= parseInt(max, 10)
        );
      });
    }

    if (selectedCategories.length === 0 || selectedPrices.length === 0)
      return false;
    return categoryMatch && priceMatch;
  });
};

// Action creators are generated for each case reducer function
export const {
  setValue,
  clearValue,
  setSearchContent,
  setCategoryOptions,
  setPriceOptions,
} = searchSlice.actions;

export default searchSlice.reducer;
