import { Section, ServicesContainer } from '../styles/container.styled';
import { HeroTitle, ServicesText } from '../styles/typography.styled';

function Services() {
  return (
    <ServicesContainer>
      <Section>
        <HeroTitle>services</HeroTitle>
        <ServicesText>
          Before we sign a contract or write a line of code our team will spend
          the necessary time needed to understand your product vision.
          <br />
          The outcome of this scoping session is a proposal or high-level
          statement of work. <br />
          Based on your requirements, we can provide a complete offering or just
          the pieces you need.
        </ServicesText>
      </Section>
    </ServicesContainer>
  );
}

export default Services;
