"use client";
import { Box, Checkbox, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { random } from "lodash";
import { ChangeEvent } from "react";
import { setOptions } from "@/store/search";

export default function CategoryFilter() {
  const categories = useSelector((state: any) => state.search.categories);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: "18px", paddingTop: "10px" }}
      >
        Categories
      </Typography>
      {categories.map((category: string) => {
        const key = random(0, 100_000_000, false).toString();
        return <CategoryOption key={key} value={category} />;
      })}
    </Box>
  );
}

const CategoryOption = ({ value }: { value: string }) => {
  const dispatch = useDispatch();
  const options = useSelector((state: any) => state.search.options);
  const setCategoryValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setOptions({
        ...options,
        [value]: e.target.checked,
      }),
    );
  };
  console.log(options);
  console.log(value);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        paddingInline: "10px",
        paddingBottom: "5px",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{value}</Typography>
      <Checkbox
        size="small"
        onChange={setCategoryValue}
        checked={options[value]}
        color="secondary"
      />
    </Box>
  );
};
