import { Box } from "@mui/material";
import CategoryFilter from "./Filter/Category/CategoryFilter";
import PriceFilter from "./Filter/Price/PriceFilter";

const SideFilterBar = ({
  width,
  height,
}: {
  width: number | string;
  height: number | string;
}) => {
  return (
    <Box
      sx={{
        width,
        height,
        backgroundColor: "primary.light",
        textAlign: "center",
        borderRight: "1px solid black",
      }}
    >
      <CategoryFilter />
      <PriceFilter />
      {/*
        <ColorFilter />
        <SizeFilter />
        <BrandFilter /> 
      */}
    </Box>
  );
};

export default SideFilterBar;
