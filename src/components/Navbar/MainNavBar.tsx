import { Typography, Box } from "@mui/material";
import AuthButtons from "./AuthButtons";
import { Suspense } from "react";

const MainNavbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontFamily: "monospace" }}
      >
        Boundless
      </Typography>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthButtons />
      </Suspense>
    </Box>
  );
};

export default MainNavbar;
