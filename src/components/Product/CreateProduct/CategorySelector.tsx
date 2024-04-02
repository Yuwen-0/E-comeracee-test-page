"use client";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { setCategory } from "@/store/create-product";
const CategorySelector = () => {
  return (
    <FormControl sx={{ width: "31%" }}>
      <InputLabel variant="standard" htmlFor="CategorySelect">
        Categories
      </InputLabel>
      <NativeSelect
        variant="outlined"
        defaultValue={30}
        inputProps={{
          name: "age",
          id: "CategorySelect",
        }}
        onChange={setCategory}
      >
        <option value={"Tech"}>Tech</option>
        <option value={"Clothing"}>Clothing</option>
        <option value={"Accessories"}>Accessories</option>
        <option value={"Home & Garden"}>Home & Garden</option>
        <option value={"Beauty & Health"}>Beauty & Health</option>
        <option value={"Toys & Games"}>Toys & Games</option>
        <option value={"Sports & Outdoors"}>Sports & Outdoors</option>
      </NativeSelect>
    </FormControl>
  );
};

export default CategorySelector;
