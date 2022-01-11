import styled from 'styled-components';

import heroBg from '../../assets/images/backgrounds/home.jpg';

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
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
