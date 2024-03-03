import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeOptions } from "@/lib/theme";
import Theme from "@/components/Theme";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Theme>
        <Box
          sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#78A1BB",
          }}
        >
          {children}
        </Box>
      </Theme>
    </>
  );
}
