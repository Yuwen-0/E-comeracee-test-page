import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeOptions } from "@/lib/theme";

export default function SignUpLayout({
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
          background: "linear-gradient(to bottom right, #25a3d2, #f5f5f5);",
        }}
      >
        {children}
      </Box>
    </>
  );
}
