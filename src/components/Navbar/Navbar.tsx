import { AppBar } from "@mui/material";
import CatogoryNavBar from "./CatogoryNavBar";
import MainNavbar from "./MainNavbar";
import Theme from "@/components/Theme";

export default async function Navbar() {
  return (
    <nav>
      <Theme>
        <AppBar
          sx={{
            height: "120px",
            display: "flex",
            alignItems: "center",
            flexDirection: "coulmn",
            padding: "20px 20px 0 20px",
            justifyContent: "space-between",
          }}
          position="static"
        >
          <MainNavbar />
          <hr style={{ width: "100vw", margin: "10px 0 2px 0" }} />
          <CatogoryNavBar />
        </AppBar>
      </Theme>
    </nav>
  );
}
