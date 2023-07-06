import { styled } from "styled-components";

export const PhotoWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  position: "relative",
});

export const GoBack = styled("button")({
  position: "absolute",
  top: "0",
  left: "0",
  alignSelf: "flex-start",
  padding: "10px",
  border: "none",
  borderRadius: "2px",
  background: "var(--gray)",
  color: "initial",
  fontSize: "initial",
  cursor: "pointer",
  transition: "all 0.3s",
  "&:hover": {
    background: "var(--dark-gray)",
    color: "var(--white)",
  },
  "@media (max-width:1000px)": {
    position: "relative",
  },
});

export const Title = styled("h3")({
  fontSize: "var(--large-font)",
  "@media (max-width:450px)": {
    fontSize: "var(--default-font)",
  },
});

export const PhotoContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  width: "100%",
  "@media (max-width:1000px)": {
    flexDirection: "column",
  },
});

export const Image = styled("img")({
  maxWidth: "500px",
  width: "100%",
  height: "400px",
  borderRadius: "2px",
  "@media (max-width:450px)": {
    height: "300px",
  },
});

export const Description = styled("p")({
  maxWidth: "600px",
  width: "100%",
});

export const CommentsWrapperSkeleton = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
