import { ROUTES } from "constant/routes";

import { HeaderWrapper, LinkStyled, Logo } from "./styles";

const Header = () => (
  <HeaderWrapper>
    <LinkStyled to={ROUTES.HOME_PAGE}>
      <Logo>photoGram</Logo>
    </LinkStyled>
  </HeaderWrapper>
);

export default Header;
