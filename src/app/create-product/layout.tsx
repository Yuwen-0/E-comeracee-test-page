import MainNavBar from "@/components/Navbar/MainNavBar";
import { Box } from "@mui/material";

export default function CreateProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      <MainNavBar
        searchText={""}
        width={"100%"}
        height={null}
        border
        backgroundColor={"primary.main"}
        padding={2}
      />
      <Box sx={{ height: "calc(100vh - 70px)" }} padding={"20px"}>
        {children}
      </Box>
    </Box>
  );
}
