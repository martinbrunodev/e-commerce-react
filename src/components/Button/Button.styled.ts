import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize.s};

  height: 2.5rem;
  background-color: ${(props) => props.theme.color.colorVariant02};
  color: ${(props) => props.theme.color.colorVariant05};
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
