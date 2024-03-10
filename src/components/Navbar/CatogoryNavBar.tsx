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
      Headphone: {
        label: "Headphone",
        subCategories: ["JBL", "Sony", "Beats", "Bose", "Razer"],
      },
    },
    icon: "Bolt",
  },
  {
    label: "Clothing",
    subCategories: {
      Shirt: {
        label: "Shirt",
      },
      TShirt: {
        label: "T-Shirt",
      },
      Pants: {
        label: "Pants",
      },
      Shoes: {
        label: "Shoes",
      },
      Jacket: {
        label: "Jacket",
      },
    },
  },
  {
    label: "Accessories",
    subCategories: {
      Watch: {
        label: "Watch",
      },
      Belt: {
        label: "Belt",
      },
    },
    icon: "Category",
  },
  {
    label: "Home & Garden",
    subCategories: {
      // Add your subcategories for Home & Garden here
      Furniture: {
        label: "Furniture",
      },
      Appliances: {
        label: "Appliances",
      },
      // Add more subcategories as needed
    },
  },
  {
    label: "Beauty & Health",
    subCategories: {
      // Add your subcategories for Beauty & Health here
      Skincare: {
        label: "Skincare",
      },
      Haircare: {
        label: "Haircare",
      },
      // Add more subcategories as needed
    },
  },
  {
    label: "Toys & Games",
    subCategories: {
      // Add your subcategories for Toys & Games here
      BoardGames: {
        label: "Board Games",
      },
      ActionFigures: {
        label: "Action Figures",
      },
      // Add more subcategories as needed
    },
  },
  {
    label: "Sports & Outdoors",
    subCategories: {
      // Add your subcategories for Sports & Outdoors here
      Clothing: {
        label: "Clothing",
      },
      Equipment: {
        label: "Equipment",
      },
      // Add more subcategories as needed
    },
  },
];

const CatogoryNavBar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {Categories.map((category, index) => (
          <Category key={index} value={category} />
        ))}
      </Box>
    </>
  );
};

export default CatogoryNavBar;
