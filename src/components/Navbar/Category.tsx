import {
  Bolt,
  Laptop,
  Phone,
  Tablet,
  Category as CategoryIcon,
  Checkroom,
  Sports,
  Toys,
  Spa,
  Home,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Icons = {
  Bolt,
  Laptop,
  Phone,
  Tablet,
  Category: CategoryIcon,
  Checkroom,
  Sports,
  Toys,
  Spa,
  Home,
};

interface CategoryProps {
  label: string;
  subCategories: any[] | {}; // Array of strings or nested subcategory objects
  icon: string;
}

const Category: React.FC<CategoryProps> = ({ label, subCategories, icon }) => {
  const streak = "good";
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const Icon = Icons[icon as keyof typeof Icons];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function renderSubCategory(subCategories: any) {
    if (typeof subCategories === "object") {
      return Object.keys(subCategories).map((key) => {
        const Icon = Icons[subCategories[key].icon as keyof typeof Icons];
        return (
          <MenuItem onClick={handleClose} key={key}>
            <Icon sx={{ mr: 1.1 }} />
            {subCategories.subCategories
              ? renderSubCategory(subCategories.subCategories)
              : subCategories[key].label}
          </MenuItem>
        );
      });
    }
    return subCategories.map((subCategory: string) => {
      return (
        <>
          <Button>
            <Typography>{subCategory}</Typography>
          </Button>
          <Menu></Menu>
        </>
      );
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Button
        startIcon={<Icon />}
        size="large"
        color="inherit"
        onClick={handleClick}
      >
        {label}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {renderSubCategory(subCategories)}
      </Menu>
      <Box
        sx={{ position: "absolute", top: "100%", left: 0, width: "100%" }}
      ></Box>
    </Box>
  );
};

export default Category;
