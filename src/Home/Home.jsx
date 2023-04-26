import React from "react";
import { About, Header, Network, Step } from "../homepage";
import FAQs from "../homepage/FAQ/FAQs";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Step />
      <Network />
      <FAQs />
    </div>
  );
};

export default Home;
