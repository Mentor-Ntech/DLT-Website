import { Route, Routes } from "react-router-dom";

import {
  Congrat,
  Contact,
  Training,
  OurTeam,
  NotFound,
  Incubation,
  Courses,
  Blockchain,
  Frontend,
  Fullstack,
  ProductDesign,
} from "./pages";
import Home from "./Home/Home";
import { Layout, HomeLayout } from "./component/index";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route element={<Layout />}>
          <Route exact path="/team" element={<OurTeam />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/training" element={<Training />} />
          <Route exact path="/incubation" element={<Incubation />} />

          <Route exact path="/our-courses/" element={<Courses />}>
            <Route exact path="blockchain-dev" element={<Blockchain />} />
            <Route exact path="frontend-dev" element={<Frontend />} />
            <Route exact path="product-design" element={<ProductDesign />} />
            <Route exact path="fullstack-dev" element={<Fullstack />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route exact path="/congrat" element={<Congrat />} />
      </Routes>
    </>
  );
};

export default App;
