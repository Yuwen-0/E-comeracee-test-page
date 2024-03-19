import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { UseSelector, useDispatch } from "react-redux";
import { setOptions } from "@/store/search";
import CategoryFilter from "./CategoryFilter";

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
      {/*
        <PriceFilter />
        <ColorFilter />
        <SizeFilter />
        <BrandFilter /> 
      */}
    </Box>
  );
};

export default SideFilterBar;
