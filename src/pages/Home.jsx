import React from 'react';

import { About, Hero, Services } from '../components/containers';
import { Main } from '../components/styles/container.styled';

const Home = () => {
  return (
    <Main>
      <Hero />
      <About />
      <Services />
    </Main>
  );
};

export default Home;
