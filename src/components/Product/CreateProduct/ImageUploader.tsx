"use client";
import { setImage } from "@/store/create-product";
import { Button } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

const ImageUploader = () => {
  const dispatch = useDispatch();
  const image = useSelector((state: any) => state.createProduct.image);
  const setImageValue = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        dispatch(setImage(reader.result as string));
      }
    };
    if (e.target.files && e.target.files[0].type.startsWith("image/"))
      reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <Button
      color="secondary"
      sx={{ width: "25%" }}
      component="label"
      variant="contained"
    >
      set Image
      <input
        type="file"
        accept="image/*"
        id="image"
        name="image"
        style={{ display: "none" }}
        onChange={setImageValue}
      />
    </Button>
  );
};

export default ImageUploader;
