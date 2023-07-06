import { styled } from "styled-components";

import { IFilterStyledProps } from "./types";

export const FiltersWrapper = styled("div")({
  display: "flex",
  gap: "10px",
  overflowX: "hidden",
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    width: "20px",
    height: "3px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "var(--gray)",
    borderRadius: "8px",
  },
  "@media (max-width:450px)": {
    gap: "5px",
    width: "300px",
    paddingBottom: "5px",
    overflow: "hidden",
    overflowX: "scroll",
    cursor: "pointer",
  },
});

export const Filter = styled("button")<IFilterStyledProps>(({ $isActive }) => ({
  padding: "5px 10px",
  border: "1px solid var(--gray)",
  borderRadius: "2px",
  backgroundColor: $isActive ? "var(--gray)" : "var(--white)",
  transition: "all 0.3s",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "var(--gray)",
  },
}));
