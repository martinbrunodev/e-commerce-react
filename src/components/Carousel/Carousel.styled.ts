import styled from "styled-components";
import Button from "../Button/Button";

export const CurrentImageStyled = styled.img`
  width: 100%;
  height: 350px;
  cursor: pointer;
  border-radius: 16px;
  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

export const ImageStyled = styled.img<{ selected: boolean }>`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 0.7em;
    border-color: 2px;
    background-color: ${({ theme }) => theme.color.colorVariant05};
    &:hover {
      opacity: 0.6;
    }
    opacity: ${({ selected }) => (selected ? ".6" : "1")};
    border: ${({ selected }) =>
      selected ? "3px solid hsl(26, 100%, 55%)" : null};
  }
`;

export const ImageWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArrowNextStyled = styled(Button)`
  position: absolute;
  bottom: 39rem;
  left: 20rem;
  width: 4.5em;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.colorVariant05};
  border-radius: 50%;
  max-width: 3em;
  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    bottom: 30rem;
    left: 69.8rem;
  }
`;
export const ArrowPreviousStyled = styled(ArrowNextStyled)`
  left: 3.5rem;

  @media (min-width: 768px) {
    left: 48rem;
  }
`;
