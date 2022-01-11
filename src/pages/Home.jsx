import React from 'react';

import { About, Hero } from '../components/containers';
import { Main } from '../components/styles/container.styled';

const Home = () => {
  return (
    <Main>
      <Hero />
      <About />
    </Main>
  );
};

export default Home;
