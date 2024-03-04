import { Box } from "@mui/material";
import { useRef } from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Typography, Link as Mlink } from "@mui/material";

const SubCategory = ({ subCategory, open, ToggleSubMenu }: any) => {
  console.log(open);
  const height = `${subCategory.subCategories.length * 20}px`;
  const SubCatMenu = useRef<HTMLElement | null>(null);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        onClick={() => {
          if (subCategory.subCategories) {
            ToggleSubMenu(subCategory.label);
          }
        }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: "10px",
          alignItems: "center",
          height: "100%",
          width: "100%",
          gap: "10px",
        }}
      >
        <p style={{ margin: "0", padding: "0" }}>{subCategory.label}</p>
        <span
          style={{
            transition: "all 0.3s ease-in-out,color 0.1s ease-in-out",
            transform: open[subCategory.label]
              ? "rotate(180deg)"
              : "rotate(0deg)",
          }}
        >
          ▼
        </span>
      </Box>
      <Box
        ref={SubCatMenu}
        sx={{
          height: open[subCategory.label] ? height : "0px",
          display: open[subCategory.label] ? "flex" : "none",
          opacity: "1",
          gap: "20px",
          flexDirection: "column",
          color: "black",
        }}
      >
        {subCategory.subCategories &&
          subCategory.subCategories.map((value: any) => (
            <Box
              key={value}
              sx={{
                position: "relative",
                height: "0px",
                display: "flex",
                flexDirection: "column",
                color: "black",
              }}
            >
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  paddingLeft: "30px",
                  alignContent: "center",
                }}
              >
                <Mlink
                  href=""
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    fontSize: "15px",
                    color: "black",
                  }}
                >
                  <HorizontalRuleIcon sx={{ color: "black" }} />
                  {value}
                </Mlink>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default SubCategory;
