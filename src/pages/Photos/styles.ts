import styled from "styled-components";

export const PhotosWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
});

export const Title = styled("h3")({
  fontSize: "var(--large-font)",
});

export const PhotosContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap",
});
