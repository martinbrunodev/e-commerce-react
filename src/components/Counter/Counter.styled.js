import styled from "styled-components";
import Button from "../Button/Button";

export const CounterFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20em;
  flex-direction: column;
  padding-top: 1em;
  gap: 1em;
  @media (min-width: 768px) {
    width: unset;
    flex-direction: row;
  }
`;

export const CounterWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CounterIncrementStyled = styled(Button)`
  border-radius: 0 6px 6px 0;
  background-color: hsl(0, 0%, 97%);
  width: 11em;
  justify-content: flex-end;
  align-items: flex-end;
  align-items: center;
  padding: 15px;
  &:hover {
    background-color: hsl(0, 0%, 97%);
    opacity: 1;
  }
  @media (min-width: 768px) {
    width: 3em;
    justify-content: center;
    padding: 5px;
  }
`;

export const CounterDecrementStyled = styled(CounterIncrementStyled)`
  border-radius: 6px 0 0 6px;
  justify-content: flex-start;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const CounterBox = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
  background-color: hsl(0, 0%, 97%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
