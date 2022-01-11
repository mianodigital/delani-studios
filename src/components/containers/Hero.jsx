import logo from '../../assets/icons/logo/logo.png';
import click from '../../assets/icons/site/mouse.png';
import { Center, Container, HeroContainer } from '../styles/container.styled';
import { Click, Logo } from '../styles/image.styled';
import { HeroText, HeroTitle } from '../styles/typography.styled';

function Hero() {
  return (
    <HeroContainer>
      <Container>
        <Center>
          <Logo src={logo} alt='logo' />
          <HeroTitle>
            welcome <br />
            to delani studios
          </HeroTitle>
          <HeroText>
            amazing people are making amazing designs in a fun environment
          </HeroText>
        </Center>
        <Center>
          <Click src={click} alt='click' />
        </Center>
      </Container>
    </HeroContainer>
  );
}

export default Hero;
