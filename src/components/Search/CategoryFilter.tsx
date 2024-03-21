"use client";
import { Box, Checkbox, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { random } from "lodash";
import { ChangeEvent } from "react";
import { setOptions } from "@/store/search";

export default function CategoryFilter() {
  const categories = useSelector((state: any) => state.search.categories);
  return (
    <Box>
      <Typography
        sx={{ paddingInline: "10px", cursor: "pointer" }}
        fontWeight={"bold"}
        fontSize={"20px"}
        color={"text.secondary"}
        display={"flex"}
        alignItems={"center"}
      >
        Categories
        <span
          style={{
            paddingInline: "7px",
            transition: "all 0.3s ease-in-out",
          }}
        >
          ▼
        </span>
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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "7px",
        justifyContent: "space-between",
      }}
    >
      <Typography fontWeight={"bold"} color={"text.secondary"}>
        - {value}
      </Typography>
      <Checkbox
        size="small"
        onChange={setCategoryValue}
        checked={options[value]}
        color="secondary"
      />
    </Box>
  );
};
