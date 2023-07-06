import { Outlet } from "react-router-dom";

import { Container, Main } from "./styles";
import Header from "./Header";

const Layout = () => (
  <Container>
    <Header />
    <Main>
      <Outlet />
    </Main>
  </Container>
);

export default Layout;
