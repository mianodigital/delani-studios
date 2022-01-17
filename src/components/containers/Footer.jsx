import Social from '../../utils/icons.json';
import { Container, IconContainer } from '../styles/container.styled';
import { SocialIcon } from '../styles/image.styled';
import { FooterText, HeadingContainer } from '../styles/typography.styled';

function Footer() {
  return (
    <Container>
      <IconContainer>
        {Social.icons.map((item, i) => (
          <SocialIcon
            key={i}
            src={require('../../assets/icons/social/' + item.image + '.png')}
            alt={item.image}
          />
        ))}
      </IconContainer>
      <HeadingContainer>
        <FooterText>
          DELANI STUDIOS. <br /> 2022
        </FooterText>
      </HeadingContainer>
    </Container>
  );
}

export default Footer;
