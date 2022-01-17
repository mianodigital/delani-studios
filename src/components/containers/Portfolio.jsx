import React from 'react';

import PImage from '../../utils/portfolio.json';
import { Container, Section } from '../styles/container.styled';
import { PortfolioGrid, PortfolioImage } from '../styles/image.styled';
import { HeadingContainer, Title } from '../styles/typography.styled';

function Portfolio() {
  return (
    <Container>
      <HeadingContainer>
        <Title>Portfolio</Title>
      </HeadingContainer>
      <Section>
        {/* Implementing the masonry package to arrange the portfolio images */}
        <PortfolioGrid breakpointCols={4}>
          {PImage.portfolio.map((item, i) => (
            <PortfolioImage
              key={i}
              src={require('../../assets/images/portfolio/' +
                item.image +
                '.jpg')}
              alt={item.image}
            />
          ))}
        </PortfolioGrid>
      </Section>
    </Container>
  );
}

export default Portfolio;
