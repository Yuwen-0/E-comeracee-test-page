"use client";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Image from "next/image";
import Product from "../Product";

const PreviewProduct = () => {
  const { name, image, price, currency, description } = useSelector(
    (state: any) => state.createProduct,
  );
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Product
        content={{ name, image, price, currency, description }}
        search=""
      />
    </Box>
  );
};

export default PreviewProduct;
