"use client";
import { Box, Checkbox, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent } from "react";
import { setCategoryOptions } from "@/store/search";

const CategoryOption = ({ value }: { value: string }) => {
  const dispatch = useDispatch();
  const categoryOptions = useSelector(
    (state: any) => state.search.options.Category,
  );
  const setCategoryValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setCategoryOptions({
        name: value,
        value: e.target.checked,
      }),
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingInline: "7px",
        justifyContent: "space-between",
        marginLeft: "17px",
        width: "80%",
      }}
    >
      <Typography fontWeight={"bold"} color={"text.secondary"}>
        - {value}
      </Typography>
      <Checkbox
        size="small"
        onChange={setCategoryValue}
        checked={categoryOptions[value] || false}
        color="secondary"
      />
    </Box>
  );
};

export default CategoryOption;
