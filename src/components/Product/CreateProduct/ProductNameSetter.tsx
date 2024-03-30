"use client";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "@/store/create-product";
import { ChangeEvent } from "react";

const ProductNameSetter = () => {
  const name = useSelector((state: any) => state.createProduct.name);
  const dispatch = useDispatch();
  return (
    <TextField
      sx={{ width: "25%" }}
      id="title"
      name="Title"
      label="Title"
      value={name}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        dispatch(setName(e.target.value))
      }
    />
  );
};

export default ProductNameSetter;
