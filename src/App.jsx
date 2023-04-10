import { Route, Routes } from "react-router-dom";

import { Congrat, Contact, JoinUs, OurTeam, NotFound } from "./pages";
import Home from "./Home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/team" element={<OurTeam />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/join" element={<JoinUs />}></Route>
        <Route exact path="/congrat" element={<Congrat />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
