"use client";
import MainNavbar from "@/components/Navbar/MainNavbar";
import SideFilterBar from "@/components/Navbar/SideFilterBar";
import { Box } from "@mui/material";
import Theme from "@/components/Theme";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Theme>
      <Box sx={{ height: "100vh", overflowY: "hidden" }}>
        {" "}
        <Box>
          <MainNavbar
            padding={2}
            backgroundColor="primary.main"
            width={undefined}
            height={70}
            boxShadow={undefined}
          />
          <Box display="flex" gap={2}>
            <SideFilterBar width={300} height={"calc(100vh - 70px)"} />
            {children}
          </Box>
        </Box>
      </Box>
    </Theme>
  );
};

export default Layout;
