import { AppBar } from "@mui/material";
import CatogoryNavBar from "./CatogoryNavBar";
import MainNavbar from "./MainNavBar";

export default async function Navbar() {
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
        <MainNavbar />
        <hr style={{ width: "100vw", margin: "10px 0 2px 0" }} />
        <CatogoryNavBar />
      </AppBar>
    </nav>
  );
}
