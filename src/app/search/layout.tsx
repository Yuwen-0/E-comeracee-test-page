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
    <body style={{ margin: 0, overflow: "hidden" }}>
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
          <Box display="flex" gap={2}>
            <SideFilterBar width={300} height={"calc(100vh - 70px)"} />
            <Box width={"calc(100% - 300px)"}>{children}</Box>
          </Box>
        </Theme>
      </Box>
    </body>
  );
};

export default Layout;
