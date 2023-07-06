import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled("header")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "fit-content",
  padding: "20px",
  borderRadius: "2px 2px 0 0",
  background: "var(--dark-gray)",
});

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled("p")({
  fontSize: "var(--large-font)",
  color: "var(--white)",
});
