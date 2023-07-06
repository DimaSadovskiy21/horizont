import { styled } from "styled-components";

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "1360px",
  width: "100%",
  minHeight: "100%",
  margin: "0 auto",
  border: "1px solid var(--gray)",
  borderRadius: "2px",
  backgroundColor: "var(--white)",
});

export const Main = styled("main")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "20px",
});
