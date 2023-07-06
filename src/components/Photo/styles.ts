import { styled } from "styled-components";

export const PhotoWrapper = styled("div")({
  position: "relative",
});

export const Image = styled("img")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "400px",
  width: "100%",
  height: "300px",
  borderRadius: "2px",
  "@media (max-width:450px)": {
    width: "300px",
    height: "200px",
  },
});

export const Overline = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  borderRadius: "2px",
  opacity: 0,
  backgroundColor: "var(--overline)",
  color: "var(--white)",
  transition: "all 0.3s",
  pointerEvents: "all",
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
  },
});
