import { Box } from "@mui/material";
import { useRef } from "react";
import Link from "next/link";

const SubCategory = ({ label }: { label: string }) => {
  const subCatRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (subCatRef.current) {
      subCatRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
  };

  const handleMouseLeave = () => {
    if (subCatRef.current) {
      subCatRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  };

  return (
    <Box
      ref={subCatRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingInline: "10px",
        alignItems: "center",
        height: "100%",
        width: "100%",
        gap: "10px",
      }}
    >
      <Link href={`/filter/${label}`}>
        <p style={{ margin: "0", padding: "0" }}>{label}</p>
      </Link>
    </Box>
  );
};

export default SubCategory;
