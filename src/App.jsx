import { Route, Routes } from "react-router-dom";

import { Congrat, Contact, JoinUs, OurTeam, NotFound } from "./pages";
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
          <Route exact path="/join" element={<JoinUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route exact path="/congrat" element={<Congrat />} />
      </Routes>
    </>
  );
};

export default App;
