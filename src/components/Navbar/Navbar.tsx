import { AppBar } from "@mui/material";
import CatogoryNavBar from "./CatogoryNavBar";
import MainNavbar from "./MainNavbar";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/[...nextauth]/options";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <nav>
      <AppBar
        sx={{
          height: "110px",
          display: "flex",
          alignItems: "center",
          flexDirection: "coulmn",
          padding: "20px",
          justifyContent: "space-between",
        }}
        position="static"
      >
        <MainNavbar session={session} />
        <hr style={{ width: "100vw", margin: "10px 0 2px 0" }} />
        <CatogoryNavBar />
      </AppBar>
    </nav>
  );
}
