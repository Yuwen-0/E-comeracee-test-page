"use client";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPrice, setCurrency } from "@/store/create-product";
import { ChangeEvent } from "react";

const PriceSetter = () => {
  const price = useSelector((state: any) => state.createProduct.price);
  const dispatch = useDispatch();

  const setPriceValue =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newPrice = [...price];
      const value = e.target.value;
      if (index === 0) {
        const integers = Math.max(parseInt(value) || 0, 0);
        newPrice[index] = Math.min(integers, 100000000000).toString();
        if (integers !== 0) {
          newPrice[index] = newPrice[index].toString().replace(/^0+/, "");
        }
      } else {
        const decimals = Math.max(parseInt(value) || 0, 0);
        newPrice[index] = Math.min(decimals, 99).toString();
        if (decimals !== 0) {
          newPrice[index] = newPrice[index].replace(/^0+/, "");
        }
      }
      dispatch(setPrice(newPrice));
    };

  const setCurrencyValue = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrency(e.target.value));
  };

  return (
    <Box sx={{ display: "flex", gap: "10px", width: "50%" }}>
      <FormControl sx={{ width: "12%", display: "inline-block" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Currency
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
          onChange={setCurrencyValue}
        >
          <option value={"$"}>$</option>
          <option value={"€"}>€</option>
          <option value={"£"}>£</option>
          <option value={"₹"}>₹</option>
        </NativeSelect>
      </FormControl>
      <TextField
        sx={{ width: "30%", display: "inline-block" }}
        id="IntPrice"
        name="Price"
        label="Integers"
        type="number"
        value={price[0]}
        onChange={setPriceValue(0)}
      />
      <TextField
        sx={{ width: "16%", display: "inline-block" }}
        id="decimals"
        name="Price"
        label="decimals"
        type="number"
        value={price[1]}
        onChange={setPriceValue(1)}
      />
    </Box>
  );
};

export default PriceSetter;
