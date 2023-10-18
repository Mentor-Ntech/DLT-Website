import { Route, Routes } from "react-router-dom";

import {
  Congrat,
  Contact,
  Training,
  OurTeam,
  NotFound,
  Incubation,
} from "./pages";
import Home from "./Home/Home";
import { Layout, HomeLayout, CoursesLayout } from "./component/index";
import Productdesign from "./pages/ProductDesign/ProductDesign";

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
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route exact path="/congrat" element={<Congrat />} />
      </Routes>
    </>
  );
};

export default App;