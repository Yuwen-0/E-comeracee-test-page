import { Box } from "@mui/material";

const SideFilterBar = ({
  width,
  height,
}: {
  width: number | string;
  height: number | string;
}) => {
  return (
    <Box
      sx={{
        width,
        height,
        backgroundColor: "primary.light",
        textAlign: "center",
        borderRight: "1px solid black",
      }}
    >
      <h1>Side Filter Bar</h1>
    </Box>
  );
};

export default SideFilterBar;
