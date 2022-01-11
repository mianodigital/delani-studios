import React from 'react';

import { Container, Section } from '../styles/container.styled';
import { Text, Title } from '../styles/typography.styled';

function About() {
  return (
    <Container>
      <Section>
        <Title>ABOUT US</Title>
        <Text>
          When you work with us, you are part of a team of commited
          collaborators.
          <br />
          All aspects of our software development process are integrated,
          iterative and agile.
          <br />
          <br />
          Our approach unifies design, development and product management to
          create exceptional products.
          <br />
          We start each project by understanding your business goals, the users'
          needs and the product requirements.
          <br />
          Then we help translate them into effective and elegant solutions.
        </Text>
      </Section>
    </Container>
  );
}

export default About;
