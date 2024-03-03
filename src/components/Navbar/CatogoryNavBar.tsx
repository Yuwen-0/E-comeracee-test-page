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
  {
    label: "Home & Garden",
    subCategories: {
      // Add your subcategories for Home & Garden here
      Furniture: {
        label: "Furniture",
        subCategories: ["Tables", "Chairs", "Sofas", "Beds"],
        icon: "Home",
      },
      Appliances: {
        label: "Appliances",
        subCategories: [
          "Refrigerators",
          "Washing Machines",
          "Dishwashers",
          "Ovens",
        ],
        icon: "Home",
      },
      // Add more subcategories as needed
    },
    icon: "Home",
  },
  {
    label: "Beauty & Health",
    subCategories: {
      // Add your subcategories for Beauty & Health here
      Skincare: {
        label: "Skincare",
        subCategories: ["Cleansers", "Moisturizers", "Sunscreen", "Makeup"],
        icon: "Spa",
      },
      Haircare: {
        label: "Haircare",
        subCategories: [
          "Shampoo",
          "Conditioner",
          "Styling Products",
          "Hair Color",
        ],
        icon: "Spa",
      },
      // Add more subcategories as needed
    },
    icon: "Spa",
  },
  {
    label: "Toys & Games",
    subCategories: {
      // Add your subcategories for Toys & Games here
      BoardGames: {
        label: "Board Games",
        subCategories: [
          "Strategy Games",
          "Party Games",
          "Card Games",
          "Puzzles",
        ],
        icon: "Toys",
      },
      ActionFigures: {
        label: "Action Figures",
        subCategories: ["Superheroes", "Movies & TV", "Sports", "Video Games"],
        icon: "Toys",
      },
      // Add more subcategories as needed
    },
    icon: "Toys",
  },
  {
    label: "Sports & Outdoors",
    subCategories: {
      // Add your subcategories for Sports & Outdoors here
      Clothing: {
        label: "Clothing",
        subCategories: ["Jerseys", "Shorts", "Shoes", "Accessories"],
        icon: "Sports",
      },
      Equipment: {
        label: "Equipment",
        subCategories: [
          "Balls",
          "Bats",
          "Protective Gear",
          "Fitness Equipment",
        ],
        icon: "Sports",
      },
      // Add more subcategories as needed
    },
    icon: "Sports",
  },
];

const CatogoryNavBar = () => {
  return (
    (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            gap: "10px",
            zIndex: 30,
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
