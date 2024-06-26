"use client";
import MainNavBar from "@/components/Navbar/MainNavBar";
import SideFilterBar from "@/components/Search/SideFilterBar";
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
    <Box sx={{ height: "100%", overflow: "hidden" }}>
      <Theme>
        <MainNavBar
          padding={1.2}
          backgroundColor="primary.main"
          width={undefined}
          height={70}
          boxShadow={undefined}
          border
          searchText={search}
        />
        <Box
          display="flex"
          justifyContent={"space-between"}
          sx={{ overflow: "hidden" }}
        >
          <SideFilterBar width={"17%"} height={"calc(100vh - 70px)"} />
          <Box width={"83%"}>{children}</Box>
        </Box>
      </Theme>
    </Box>
  );
};

export default Layout;
