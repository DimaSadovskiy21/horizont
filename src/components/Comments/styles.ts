import styled from "styled-components";
import { ISubmitStyledProps } from "./types";

export const CommentsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  maxWidth: "400px",
  width: "100%",
  height: "400px",
  "@media (max-width:1000px)": {
    maxHeight: "400px",
    height: "100%",
  },
});

export const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  minWidth: "300px",
  width: "100%",
});

export const TextArea = styled("textarea")({
  height: "70px",
  padding: "5px",
  border: "2px solid var(--gray)",
  borderRadius: "2px",
  outline: "none",
  fontSize: "var(--small-font)",
  resize: "none",
});

export const Submit = styled("button")<ISubmitStyledProps>(
  ({ $isDisabled }) => ({
    padding: "10px",
    border: "none",
    borderRadius: "2px",
    background: "var(--gray)",
    color: "initial",
    fontSize: "initial",
    pointerEvents: $isDisabled ? "none" : "all",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      background: "var(--dark-gray)",
      color: "var(--white)",
    },
  })
);

export const CommentsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  height: "100%",
  padding: "5px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "3px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "var(--gray)",
    borderRadius: "8px",
  },
});

export const Comment = styled("div")({
  minWidth: "400px",
  width: "100%",
  minHeight: "40px",
  padding: "2px",
  border: "1px solid var(--gray)",
  borderRadius: "2px",
  fontSize: "var(--small-font)",
  "@media (max-width:450px)": {
    minWidth: "300px",
  },
});
