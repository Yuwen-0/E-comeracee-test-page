import { Box } from "@mui/material";
import { useRef } from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Typography, Link as Mlink } from "@mui/material";
import Link from "next/link";

const SubCategory = ({ subCategory, open, ToggleSubMenu }: any) => {
  const SubCatRef = useRef<HTMLDivElement | null>(null);
  const handeHover = () => {
    if (SubCatRef.current) {
      SubCatRef.current.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
  };

  const handleLeave = () => {
    if (SubCatRef.current) {
      SubCatRef.current.style.backgroundColor = "rgba(0,0,0,0)";
    }
  };
  return (
    <Box
      ref={SubCatRef}
      onMouseEnter={handeHover}
      onMouseLeave={handleLeave}
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingInline: "10px",
        alignItems: "center",
        height: "45px",
        width: "100%",
        gap: "10px",
      }}
    >
      <Link href={`/filter/${subCategory.label}`}>
        <p style={{ margin: "0", padding: "0" }}>{subCategory.label}</p>
      </Link>
    </Box>
  );
};

export default SubCategory;
