"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { formatNumber } from "@/lib/utulities";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Product({ content, search }: any) {
  const router = useRouter();
  const price = content.price.split(".");
  const [name, setName] = useState(content.name);
  const IntPrice = formatNumber(price[0]);
  let decimals = "";
  if (price[1]) {
    decimals = price[1].slice(0, 2);
  }

  useEffect(() => {
    if (search === "") setName(content.name);
    setName(
      content.name.replace(
        new RegExp(search, "gi"),
        (match: string) => `<strong>${match}</strong>`,
      ),
    );
  }, [content.name, search]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "256.4px",
        cursor: "pointer",
      }}
      onClick={() => router.push(`/product/${content.id}`)}
    >
      <Box
        sx={{
          width: "100%",
          height: "256.4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1711139279274-ddff5036591a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={content.name}
          width={256.4}
          height={256.4}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
        }}
      >
        <Typography dangerouslySetInnerHTML={{ __html: name }} />
        <Typography>
          <span style={{ fontWeight: "bold" }}>$</span>
          <strong>{IntPrice}</strong>
          {decimals && <sup style={{ fontWeight: "bold" }}>{decimals}</sup>}
        </Typography>
        <Typography>{content.description}</Typography>
      </Box>
    </Box>
  );
}
