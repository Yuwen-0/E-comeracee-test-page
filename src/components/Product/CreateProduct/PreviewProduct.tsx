"use client";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Product from "../Product";

const PreviewProduct = () => {
  const { name, image, price, currency, description, shortDescription } =
    useSelector((state: any) => state.createProduct);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Product
        content={{
          name,
          image,
          price,
          currency,
          description,
          shortDescription,
        }}
        search=""
      />
    </Box>
  );
};

export default PreviewProduct;
