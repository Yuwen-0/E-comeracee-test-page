import { Box } from "@mui/material";
import styles from "./Nav.module.scss";
import { useRef } from "react";

export default function Category({ label }: any) {
  const AnchorElement = useRef(null);
  const Arrow = useRef(null);

  const ShowMenu = () => {
    if (!AnchorElement.current || !Arrow.current) return;
    const anchor = AnchorElement.current as HTMLDivElement;
    const arrow = Arrow.current as HTMLSpanElement;
    anchor.style.height = "100px";
    anchor.style.bottom = "-100px";
    anchor.style.color = "black";
    arrow.style.transform = "rotate(180deg)";
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
    <>
      <Box
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
            flexDirection: "column",
            justifyContent: "center",
          }}
          ref={AnchorElement}
          className={styles.categoryMenu}
        >
          {label}
        </Box>
      </Box>
    </>
  );
}
