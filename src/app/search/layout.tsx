"use client";
import MainNavbar from "@/components/Navbar/MainNavbar";
import SideFilterBar from "@/components/Navbar/SideFilterBar";
import { Box } from "@mui/material";
import Theme from "@/components/Theme";
import { useSearchParams } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const params = useSearchParams();
  const search = params.get("name");
  return (
    <Box sx={{ height: "100%" }}>
      <Theme>
        <MainNavbar
          padding={"10px"}
          backgroundColor="primary.main"
          width={undefined}
          height={70}
          boxShadow={undefined}
          border
          searchText={search}
        />
        <Box display="flex" justifyContent={"space-between"}>
          <SideFilterBar width={250} height={"calc(100vh - 70px)"} />
          <Box width={"calc(100% - 280px)"}>{children}</Box>
        </Box>
      </Theme>
    </Box>
  );
};

export default Layout;
