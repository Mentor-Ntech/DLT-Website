import { Route, Routes } from "react-router-dom";

import { Congrat, Contact, JoinUs, OurTeam, NotFound } from "./pages";
import Home from "./Home/Home";
import Layout from "./component/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
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
