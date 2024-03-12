"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { formatNumber } from "@/lib/utulities";
import { useRouter } from "next/navigation";

export default function Product({ content }: any) {
  const router = useRouter();
  const price = content.price.split(".");
  const IntPrice = formatNumber(price[0]);
  const decimals = price[1];
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
          src={content.image}
          alt={`image for ${content.name}`}
          style={{ width: "fit-content", height: "fit-content" }}
          width={256} // Adjusted width
          height={256} // Adjusted height
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
        <Typography>{content.name}</Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>$</span>
          <strong>{IntPrice}</strong>
          <sup style={{ fontWeight: "bold" }}>{decimals}</sup>
        </Typography>
        <Typography>{content.description}</Typography>
      </Box>
    </Box>
  );
}
