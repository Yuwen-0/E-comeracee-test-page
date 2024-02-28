import Image from "next/image";
import Link from "next/link";
import authOptions from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { Box, Typography } from "@mui/material";
import db from "@/lib/db";
import Product from "@/components/Product";
import CatogoryNavBar from "@/components/Navbar/CatogoryNavBar";
export default async function Home() {
  const session = await getServerSession(authOptions);
  const featuredProductElements = await db.product.findMany({
    where: {
      featured: true,
    },
  });

  return (
    <Box color={"black"} sx={{ padding: "20px" }}>
      <Typography>{session?.user ? session.user.username : "Guest"}</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 20 }}>
        {featuredProductElements.map((product: any) => (
          <Product key={product.id} data={product} />
        ))}
      </Box>
    </Box>
  );
}
