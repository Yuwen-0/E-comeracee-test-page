import { Box } from "@mui/material";
import styles from "./Nav.module.scss";
import { useEffect, useRef, useState } from "react";
import SubCategory from "./SubCategory";

export default function Category({ value }: { value: any }) {
  const { label, subCategories } = value;
  const openState = subCategories
    ? Object.values(subCategories).map((category: any) => category.label)
    : [];
  const [open, setOpen] = useState(
    Object.fromEntries(openState.map((v) => [v, false]))
  );
  const openSubCatCount = Object.values(open).filter((v) => v).length;
  let height =
    openState.length * 40 + openState.length * 10 + openSubCatCount * 40;
  const heightRef = useRef(height);
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
    heightRef.current += openSubCatCount * 30;
    setBottom(parseInt(heightRef.current, 10) + openSubCatCount * 30);
  }, [height, openSubCatCount]);

  const ShowMenu = () => {
    if (!AnchorElement.current || !Arrow.current) return;
    const anchor = AnchorElement.current as HTMLDivElement;
    const arrow = Arrow.current as HTMLSpanElement;
    anchor.style.display = "flex";
    anchor.style.pointerEvents = "auto";
    anchor.style.height = `${height}px`;
    anchor.style.top = "50.5px";
    anchor.style.opacity = "1";
    arrow.style.transform = "rotate(180deg)";
  };

  const ToggleSubMenu = (label: string) => {
    setOpen({ ...open, [label]: !open[label] });
  };

  const HideMenu = () => {
    if (!AnchorElement.current || !Arrow.current) return;
    const anchor = AnchorElement.current as HTMLDivElement;
    const arrow = Arrow.current as HTMLSpanElement;
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
              <SubCategory
                height={subcatHeight[subCategory.label]}
                subCategory={subCategory}
                open={open}
                ToggleSubMenu={ToggleSubMenu}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
}
