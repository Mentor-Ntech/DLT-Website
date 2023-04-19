import React from "react";
import { About, Header, Network, Step } from "../homepage";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Step />
      <Network />
    </div>
  );
};

export default Home;
