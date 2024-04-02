"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { formatNumber } from "@/lib/utulities";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Product({ content, search }: any) {
  const router = useRouter();
  const price = parseInt(content.price[0]);
  const IntPrice = formatNumber(JSON.stringify(price));
  const decimals = content.price[1];
  const currency = content.currency;
  const shortDescription = content.shortDescription;
  const [name, setName] = useState(content.name);

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
            content.image
              ? content.image
              : "https://images.unsplash.com/photo-1711139279274-ddff5036591a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={content.name}
          width={256.4}
          height={256.4}
          style={{ objectFit: "cover" }}
          priority
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
          <strong>
            {IntPrice ? (currency ? currency : "$") + IntPrice : "Price"}
          </strong>
          {decimals !== 0 && (
            <sup style={{ fontWeight: "bold" }}>{decimals}</sup>
          )}
        </Typography>
        <Typography>{shortDescription}</Typography>
      </Box>
    </Box>
  );
}
