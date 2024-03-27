"use client";
import { Input } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setImage } from "@/store/create-product";
import { ChangeEvent } from "react";
import Image from "next/image";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const image = useSelector((state: any) => state.createProduct.image);
  const setImageValue = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        dispatch(setImage(reader.result as string));
      }
    };
    if (e.target.files) reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <form>
        <Input
          type="file"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setImageValue(e)}
        />
        <Image src={image} alt="image" width={200} height={200} />
      </form>
    </>
  );
}
