"use client";
import { useSearchParams } from "next/navigation";
import { filterBy } from "@/lib/products";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Product from "@/components/Product";
import ProductSkeleton from "@/components/ProductSkeleton";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const search = useSelector((state: any) => state.search.value);
  const params = useSearchParams();
  const category = params.get("category");
  const name = params.get("name");
  const [content, setContent] = useState();
  useEffect(() => {
    async function getContent() {
      setContent(await filterBy(category, name).then((res) => res.products));
    }
    getContent();
  }, [category, name]);
  return (
    <Box
      sx={{
        height: "100%", // Adjusted height to account for navbar
        overflowY: "auto", // Added for child content scrolling
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        padding: "10px 10px 0 10px",
        flexWrap: "wrap",
      }}
    >
      {content ? (
        (content as any[]).map((content) => {
          return <Product key={content.id} content={content} search={search} />;
        })
      ) : (
        <>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </>
      )}
    </Box>
  );
};
export default Filter;
