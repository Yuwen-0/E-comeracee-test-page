"use client";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Image from "next/image";
import Product from "../Product";

const PreviewProduct = () => {
  const { name, image } = useSelector((state: any) => state.createProduct);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Product content={{ name, image }} search="" />
    </Box>
  );
};

export default PreviewProduct;
