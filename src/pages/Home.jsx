import React from 'react';

import { About, Hero, Operations, Services } from '../components/containers';
import { Main } from '../components/styles/container.styled';

const Home = () => {
  return (
    <Main>
      <Hero />
      <About />
      <Services />
      <Operations />
    </Main>
  );
};

export default Home;
