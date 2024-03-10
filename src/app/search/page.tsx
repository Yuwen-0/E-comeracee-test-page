"use client";
import { useSearchParams } from "next/navigation";
import { filterBy } from "@/lib/products";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

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
        height: "calc(100vh - 70px - 40px)", // Adjusted height to account for navbar
        width: "fit-content",
        overflowY: "auto", // Added for child content scrolling
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      {content ? (
        (content as any[]).map((content) => {
          return Object.keys(content).map((value, index, array) => {
            return (
              <p key={value as string}>
                {value}: {content[value as keyof typeof content]}
              </p>
            );
          });
        })
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};
export default Filter;
