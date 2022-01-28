import styled from "styled-components";

export const CurrentImageStyled = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 16px;
  cursor: pointer;
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
    background-color: white;
    &:hover {
      opacity: 0.6;
    }
    opacity: ${(props) => (props.selected ? ".6" : "1")};
    border: ${(props) =>
      props.selected ? "3px solid hsl(26, 100%, 55%)" : null};
  }
`;

export const ImageWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
