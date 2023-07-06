import { Route, Routes } from "react-router-dom";

import { Photos, Error, Photo } from "pages";
import Layout from "components/Layout";
import { ROUTES } from "constant/routes";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path={ROUTES.HOME_PAGE} element={<Photos />} />
      <Route path={ROUTES.PHOTO_PAGE} element={<Photo />} />
      <Route path={ROUTES.UNREGISTERED_PAGE} element={<Error />} />
    </Route>
  </Routes>
);

export default App;
