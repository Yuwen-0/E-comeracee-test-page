"use client";
import { useSearchParams } from "next/navigation";
import { filterBy } from "@/lib/products";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Product from "@/components/Product";

const Filter = () => {
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
        height: "calc(100vh - 60px)", // Adjusted height to account for navbar
        overflowY: "auto", // Added for child content scrolling
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        padding: "10px",
        flexWrap: "wrap",
      }}
    >
      {content ? (
        (content as any[]).map((content) => {
          return <Product key={content.id} content={content} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};
export default Filter;
