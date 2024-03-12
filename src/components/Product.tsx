import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Product({ content }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <Image
        src={content.image}
        alt={`image for ${content.name}`}
        width={200}
        height={200}
      />
      <Typography>{content.name}</Typography>
      <Typography>{content.price}</Typography>
      <Typography>{content.description}</Typography>
    </Box>
  );
}
