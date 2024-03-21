"use client";
import { Box, Checkbox, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { random } from "lodash";
import { ChangeEvent, useRef, useState } from "react";
import { setCategoryOptions } from "@/store/search";

export function FilterTemplate({
  children,
  title,
  contentArray,
  OptionObject,
}: {
  children: JSX.Element;
  title: string;
  contentArray: any[];
  OptionObject: any;
}) {
  const [open, setOpen] = useState(false);
  const TitleRef = useRef<HTMLSpanElement>(null);
  const HideContent = (e: any) => {
    e.preventDefault();
    setOpen(!open);
    if (TitleRef.current) {
      TitleRef.current.style.transform = open
        ? "rotate(0deg)"
        : "rotate(-90deg)";
    }
  };
  return (
    <Box onClick={HideContent}>
      <Typography
        sx={{ paddingInline: "10px", cursor: "pointer" }}
        fontWeight={"bold"}
        fontSize={"20px"}
        color={"text.secondary"}
        display={"flex"}
        alignItems={"center"}
      >
        <span
          style={{
            paddingInline: "7px",
            transition: "all 0.3s ease-in-out",
          }}
          ref={TitleRef}
        >
          ▼
        </span>
        {title}
      </Typography>
      <Box>
        {contentArray.map((content: string) => {
          const key = random(0, 100_000_000, false).toString();
          return <OptionObject key={key} value={content} />;
        })}
      </Box>
    </Box>
  );
}

export default function CategoryFilter() {
  const categories = useSelector((state: any) => state.search.categories);
  return (
    <FilterTemplate
      OptionObject={CategoryOption}
      contentArray={categories}
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
