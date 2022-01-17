import styled from 'styled-components';

import heroBg from '../../assets/images/backgrounds/home.jpg';
import servicesBg from '../../assets/images/backgrounds/services.jpg';

export const Main = styled.main`
  margin: 0 auto;
`;

export const HeroContainer = styled.section`
  background-image: url(${heroBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  z-index: 90;
`;

export const Container = styled.div`
  height: 100%;
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Section = styled(Center)`
  padding: 5rem 10rem;
`;

export const ServicesContainer = styled(HeroContainer)`
  background-image: url(${servicesBg});
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem;
  width: 500px;

  & > img {
    height: 5rem;
    width: 5rem;
  }
`;
