import { Box } from "@mui/material";
import styles from "./Nav.module.scss";
import { useEffect, useRef, useState } from "react";
import SubCategory from "./SubCategory";

export default function Category({ value }: { value: any }) {
  const { label, subCategories } = value;
  const subCategoryLabels = Object.values(subCategories || {}).map(
    (category: any) => category.label
  );
  const anchorElementRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  const showMenu = () => {
    const anchor = anchorElementRef.current;
    const arrow = arrowRef.current;
    if (!anchor || !arrow) return;
    anchor.style.display = "flex";
    anchor.style.pointerEvents = "auto";
    anchor.style.height = `${
      subCategoryLabels.length * 40 +
      subCategoryLabels.length * (label === "Clothing" ? 13 : 10)
    }px`;
    anchor.style.top = "50.5px";
    anchor.style.opacity = "1";
    arrow.style.transform = "rotate(180deg)";
  };

  const hideMenu = () => {
    const anchor = anchorElementRef.current;
    const arrow = arrowRef.current;
    if (!anchor || !arrow) return;
    anchor.style.pointerEvents = "none";
    anchor.style.height = "0px";
    anchor.style.bottom = "0px";
    anchor.style.opacity = "0";
    arrow.style.transform = "rotate(0deg)";
  };

  return (
    <Box
      key={label}
      sx={{
        textAlign: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0px",
      }}
      className={styles.categoryContainer}
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
    >
      <p style={{ margin: "0", padding: "0" }}>{label}</p>
      <span
        style={{
          transition: "all 0.3s ease-in-out",
        }}
        ref={arrowRef}
      >
        ▼
      </span>
      <Box
        sx={{
          fontweight: "bold",
          backgroundColor: "primary.main",
          flexDirection: "column",
          justifyContent: "space-evenly",
          boxShadow: "20px 20px 20px 0 rgba(0, 0, 0, 0.2)",
        }}
        ref={anchorElementRef}
        className={styles.categoryMenu}
      >
        {subCategories &&
          Object.values(subCategories).map((subCategory: any, index) => (
            <>
              <SubCategory label={subCategory.label} />
              {index < subCategoryLabels.length - 1 && (
                <hr style={{ borderColor: "black" }} />
              )}
            </>
          ))}
      </Box>
    </Box>
  );
}
