import styled from "styled-components";

import Button from "../Button/Button";

export const ModalStyled = styled.div`
  display: none;
  @media (min-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
`;

export const IconStyled = styled(Button)`
  position: relative;
  top: 10px;
  left: 175px;
  width: 4.5em;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    opacity: 1;
  }
`;
