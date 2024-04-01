"use client";
import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDescription } from "@/store/create-product";

const DescriptionSetter = () => {
  const description = useSelector(
    (state: any) => state.createProduct.description,
  );
  const dispatch = useDispatch();
  return (
    <TextField
      sx={{ width: "31%" }}
      multiline
      id="description"
      name="Description"
      label="Description"
      value={description}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        dispatch(setDescription(e.target.value))
      }
    />
  );
};
export default DescriptionSetter;
