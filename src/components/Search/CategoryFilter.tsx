"use client";
import { Box, Checkbox, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { random } from "lodash";
import { ChangeEvent } from "react";
import { setCategoryOptions } from "@/store/search";

export function FilterTemplate({
  children,
  title,
  cotentArray,
  OptionObject,
}: {
  children: JSX.Element;
  title: string;
  cotentArray: any[];
  OptionObject: any;
}) {
  return (
    <Box>
      <Typography
        sx={{ paddingInline: "10px", cursor: "pointer" }}
        fontWeight={"bold"}
        fontSize={"20px"}
        color={"text.secondary"}
        display={"flex"}
        alignItems={"center"}
        onClick={() => {
          console.log("clicked");
        }}
      >
        <span
          style={{
            paddingInline: "7px",
            transition: "all 0.3s ease-in-out",
          }}
        >
          ▼
        </span>
        {title}
      </Typography>
      {cotentArray.map((content: string) => {
        const key = random(0, 100_000_000, false).toString();
        return <OptionObject key={key} value={content} />;
      })}
    </Box>
  );
}

export default function CategoryFilter() {
  const categories = useSelector((state: any) => state.search.categories);
  return (
    <FilterTemplate
      OptionObject={CategoryOption}
      cotentArray={categories}
      title={"Categories"}
    >
      {categories.map((category: string) => {
        const key = random(0, 100_000_000, false).toString();
        return <CategoryOption key={key} value={category} />;
      })}
    </FilterTemplate>
  );
}

const CategoryOption = ({ value }: { value: string }) => {
  const dispatch = useDispatch();
  const categoryOptions = useSelector(
    (state: any) => state.search.options.Category,
  );
  console.log(categoryOptions);
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
