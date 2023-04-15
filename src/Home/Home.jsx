import React from "react";
import { Navbar, Footer } from "../component";
import { About, Header, Network, Step } from "../homepage";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
      <Step />
      <Network />
      <Footer />
    </div>
  );
};

export default Home;
