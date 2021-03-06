import React from 'react';

import { About, Contact, Footer, Hero, Operations, Portfolio, Services } from '../components/containers';
import { Main } from '../components/styles/container.styled';

const Home = () => {
  return (
    <Main>
      <Hero />
      <About />
      <Services />
      <Operations />
      <Portfolio />
      <Contact />
      <Footer />
    </Main>
  );
};

export default Home;
