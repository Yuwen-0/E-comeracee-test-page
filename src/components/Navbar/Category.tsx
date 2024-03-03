import { Box } from "@mui/material";
import styles from "./Nav.module.scss";
import { useEffect, useRef, useState } from "react";

export default function Category({ value }: { value: any }) {
  const { label, subCategories } = value;
  const openState = subCategories
    ? Object.values(subCategories).map((category: any) => category.label)
    : [];
  const [open, setOpen] = useState(
    Object.fromEntries(openState.map((v) => [v, false]))
  );
  const height = `${openState.length * 40 + openState.length * 10}px`;
  const openSubCatCount = Object.values(open).filter((v) => v).length;
  const [bottom, setBottom] = useState(-height);
  const subcatHeight =
    subCategories &&
    Object.fromEntries(
      Object.values(subCategories).map((v: any) => [
        v.label,
        v.subCategories.length * 40,
      ])
    );
  const AnchorElement = useRef(null);
  const Arrow = useRef(null);
  useEffect(() => {
    setBottom(parseInt(height, 10) + openSubCatCount * 40);
  }, [height, openSubCatCount]);

  const ShowMenu = () => {
    if (!AnchorElement.current || !Arrow.current) return;
    const anchor = AnchorElement.current as HTMLDivElement;
    const arrow = Arrow.current as HTMLSpanElement;
    anchor.style.height = height;
    anchor.style.bottom = `-${bottom}px`;
    anchor.style.color = "black";
    arrow.style.transform = "rotate(180deg)";
  };

  const ToggleSubMenu = (label: string) => {
    setOpen({ ...open, [label]: !open[label] });
  };

  const HideMenu = () => {
    if (!AnchorElement.current || !Arrow.current) return;
    const anchor = AnchorElement.current as HTMLDivElement;
    const arrow = Arrow.current as HTMLSpanElement;
    anchor.style.height = "0px";
    anchor.style.bottom = "0px";
    anchor.style.color = "transparent";
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
      onMouseEnter={ShowMenu}
      onMouseLeave={HideMenu}
    >
      <p style={{ margin: "0", padding: "0" }}>{label}</p>
      <span
        style={{
          transition: "all 0.3s ease-in-out",
        }}
        ref={Arrow}
      >
        ▼
      </span>
      <Box
        sx={{
          fontweight: "bold",
          backgroundColor: "primary.main",
          border: "1px solid black",
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
        ref={AnchorElement}
        className={styles.categoryMenu}
      >
        {subCategories &&
          Object.values(subCategories).map((subCategory: any, index) => (
            <Box key={index}>
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
                {subCategory.subCategories ? (
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
                ) : null}
              </Box>
              <Box
                sx={{
                  height: open[subCategory.label]
                    ? `${subcatHeight[subCategory.label]}px`
                    : "0px",
                  width: "100%",
                  paddingLeft: "10px",
                  justifyContent: "space-between",
                  backgroundColor: "black",
                }}
              >
                {subCategory.subCategories && open[subCategory.label]
                  ? subCategory.subCategories.map((subSubCategory: any) => (
                      <p key={subSubCategory}>{subSubCategory}</p>
                    ))
                  : null}
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
