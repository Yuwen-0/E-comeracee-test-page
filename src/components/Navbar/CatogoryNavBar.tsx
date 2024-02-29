"use client";
import { Box } from "@mui/material";
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
      Mobile: {
        label: "Mobile",
        subCategories: ["iPhone", "Samsung", "Xiaomi", "Realme", "OnePlus"],
        icon: "Phone",
      },
      Tablet: {
        label: "Tablet",
        subCategories: ["Apple", "Samsung", "Xiaomi", "Realme", "OnePlus"],
        icon: "Tablet",
      },
    },
    icon: "Bolt",
  },
  {
    label: "Clothing",
    subCategories: {
      Shirt: {
        label: "Shirt",
        subCategories: ["Men", "Women", "Kids"],
        icon: "Checkroom",
      },
      Pants: {
        label: "Pants",
        subCategories: ["Men", "Women", "Kids"],
        icon: "Checkroom",
      },
      Shoes: {
        label: "Shoes",
        subCategories: ["Men", "Women", "Kids"],
        icon: "Checkroom",
      },
      Jacket: {
        label: "Jacket",
        subCategories: ["Men", "Women", "Kids"],
        icon: "Checkroom",
      },
    },
    icon: "Checkroom",
  },
  {
    label: "Accessories",
    subCategories: {
      Watch: {
        label: "Watch",
        subCategories: ["Men", "Women", "Kids"],
        icon: "Checkroom",
      },
      Belt: {
        label: "Belt",
        subCategories: ["Men", "Women", "Kids"],
        icon: "Checkroom",
      },
    },
    icon: "Category",
  },
];

const CatogoryNavBar = () => {
  return (
    (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            gap: "2em",
          }}
        >
          {Categories.map((category) => (
            <Category key={category.label} {...category} />
          ))}
        </Box>
      </>
    ) || null
  );
};

export default CatogoryNavBar;
