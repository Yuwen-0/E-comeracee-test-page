import { Bolt } from "@mui/icons-material";
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
};

interface CategoryProps {
  label: string;
  subCategories: any[]; // Array of strings or nested subcategory objects
  icon: string;
}

const Category: React.FC<CategoryProps> = ({ label, subCategories, icon }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const Icon = Icons[icon as keyof typeof Icons];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderSubCategories = (subCategories: string[] | any[]) => {
    //TODO make it render a new category for every subcategory
    return <h1>Hello</h1>;
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", position: "relative" }}
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
        {subCategories && renderSubCategories(subCategories)}
      </Menu>
    </Box>
  );
};

export default Category;
