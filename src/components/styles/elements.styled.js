import styled from 'styled-components';

export const Input = styled.input`
  width: 45%;
  margin: 1rem 0;
  background: transparent;
  border: 3px solid ${({ theme }) => theme.colors.light};
  padding: 1rem;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.font.open};
  font-size: 1.2rem;
  font-weight: 500;

  ::placeholder {
    color: ${({ theme }) => theme.colors.light};
  }

  &:focus {
    outline: none;
  }
`;
export const TextArea = styled.textarea`
  background: transparent;
  border: 3px solid ${({ theme }) => theme.colors.light};
  padding: 1rem;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.font.open};
  font-size: 1.2rem;
  font-weight: 500;

  ::placeholder {
    color: ${({ theme }) => theme.colors.light};
  }

  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
  margin: 1rem 0;
  padding: 1rem;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.font.open};
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
`;
