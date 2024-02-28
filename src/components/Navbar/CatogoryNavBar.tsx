"use client";
import {
  MenuList,
  MenuItem,
  Paper,
  Popper,
  IconButton,
  styled,
  Typography,
  Box,
  Menu,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import Category from "./Category";

const Categories = [
  {
    label: "Tech",
    subCategories: {
      Laptop: {
        label: "Laptop",
        subCategories: ["Macbook", "Dell", "HP", "Asus", "Lenovo"],
        icon: "Laptop",
      },
    },
    icon: "Bolt",
  },
  {
    label: "Clothing",
    subCategories: ["T-shirt", "Shirt", "Jeans", "Pants", "Jacket"],
  },
  {
    label: "Accessories",
    subCategories: ["Bag", "Watch", "Jewellery", "Glasses", "Sunglasses"],
  },
];

const CatogoryNavBar = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
        <Category
          label={Categories[0].label}
          subCategories={Categories[0].subCategories}
          icon="Bolt"
        />
      </Box>
    </>
  );
};

export default CatogoryNavBar;
