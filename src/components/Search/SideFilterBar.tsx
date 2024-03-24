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
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          overflowY: "scroll",
          height: "100%",
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <CategoryFilter />
        <PriceFilter />
      </Box>
      {/*
        <ColorFilter />
        <SizeFilter />
        <BrandFilter /> 
      */}
    </Box>
  );
};

export default SideFilterBar;
