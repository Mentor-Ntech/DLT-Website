import React from 'react';
import { Navbar, Footer } from './component/';
import { About, Header, Network, Step } from './homepage';
import { Congrat, Contact, JoinUs, OurTeam } from './pages';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Step />
      <Network />
      <Footer />      
    </div>
  )
}

export default App