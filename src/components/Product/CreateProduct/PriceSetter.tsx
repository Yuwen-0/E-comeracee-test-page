"use client";
import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "@/store/create-product";
import { ChangeEvent } from "react";
import { useFormControl } from "@mui/material";

const PriceSetter = () => {
  const price = useSelector((state: any) => state.createProduct.price);
  const dispatch = useDispatch();

  const setPriceValue =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newPrice = [...price];
      if (index === 0) {
        newPrice[index] = Math.max(parseInt(e.target.value), 0);
      } else {
        newPrice[index] = Math.min(parseInt(e.target.value), 99);
      }
      dispatch(setPrice(newPrice));
    };

  return (
    <Box sx={{ display: "flex", gap: "10px", width: "25%" }}>
      <TextField
        sx={{ width: "12,5%", display: "inline-block" }}
        id="price"
        name="Price"
        label="Integers"
        type="number"
        min={0}
        value={price[0]}
        onChange={setPriceValue(0)}
      />
      <TextField
        sx={{ width: "12,5%", display: "inline-block" }}
        id="price"
        name="Price"
        label="decimals"
        type="number"
        max={99}
        value={price[1]}
        onChange={setPriceValue(1)}
      />
    </Box>
  );
};

export default PriceSetter;
