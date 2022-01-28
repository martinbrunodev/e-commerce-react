import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;

  height: 2.5rem;
  background-color: hsl(26, 100%, 55%);
  color: #fff;
  border-color: transparent;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 25.5em;
  &:hover {
    opacity: 0.7;
  }
  @media (min-width: 768px) {
    width: 12rem;
  }
`;
