import { Box } from "@mui/material";

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
          background: "#78A1BB",
        }}
      >
        {children}
      </Box>
    </>
  );
}
