"use client";
import { useSearchParams } from "next/navigation";
import { filterBy } from "@/lib/products";
import { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import Product from "@/components/Product/Product";
import ProductSkeleton from "@/components/Product/ProductSkeleton";
import { useSelector, useDispatch } from "react-redux";
import { setSearchContent } from "@/store/search";

const Filter = () => {
  const search = useSelector((store: any) => store.search.value);
  const content = useSelector((store: any) => store.search.searchContent);
  const filteredContent = useSelector(
    (store: any) => store.search.filteredSearchContent,
  );
  const dispatch = useDispatch();
  const params = useSearchParams();
  const category = params.get("category");
  const name = params.get("name");
  useEffect(() => {
    const getContent = async () => {
      dispatch(
        setSearchContent(
          await filterBy(category, name).then((content) => content.products),
        ),
      );
    };
    getContent();
  }, [category, name]);

  return (
    <Box
      sx={{
        height: "calc(100vh - 70px)", // Adjusted height to account for navbar
        overflowY: "auto", // Added for child content scrolling
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        padding: "10px 10px 0 10px",
        flexWrap: "wrap",
      }}
    >
      {((Array.isArray(content) && content.length === 0) ||
        (Array.isArray(filteredContent) && filteredContent.length === 0)) && (
        <Typography>
          We Could't Find The Product You Are Looking For{" "}
          <Link href="/">Go Back To Home</Link>
        </Typography>
      )}
      {content !== false &&
        (Array.isArray(content) ? (
          filteredContent[0] !== "this is emtpty" &&
          Array.isArray(filteredContent) ? (
            filteredContent.map((content) => {
              return (
                <Product key={content.id} content={content} search={search} />
              );
            })
          ) : (
            content.map((content) => {
              return (
                <Product key={content.id} content={content} search={search} />
              );
            })
          )
        ) : (
          <>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </>
        ))}
    </Box>
  );
};
export default Filter;
