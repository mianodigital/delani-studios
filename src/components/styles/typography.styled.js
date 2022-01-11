import styled from 'styled-components';

// Titles
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.font.open};
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 3.2rem;
`;

export const HeroTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 5.5rem;
  text-transform: uppercase;
  line-height: 6rem;
`;

// Body Text
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.font.open};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
`;

export const HeroText = styled(Text)`
  color: ${({ theme }) => theme.colors.tertiary};
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 0.2rem;
`;
