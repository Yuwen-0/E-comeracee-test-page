import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeOptions } from "@/lib/theme";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          background: "#88d8ec",
        }}
      >
        {children}
      </Box>
    </>
  );
}
