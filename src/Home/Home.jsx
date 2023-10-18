import React from "react";
import { About, Header, Network, Step } from "../homepage";
import { FAQs, Footer } from "../component";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Step />
      <Network />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
