import styled from "styled-components";

export const ProductDetailsContainerStyled = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5em;
    gap: 4em;
  }
`;

export const ProductDetailsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  gap: 0.5em;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const ProductPricesWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const CounterWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProductDetailsHeader = styled.h2`
  font-family: "Kumbh Sans", sans-serif;
  color: hsl(26, 100%, 55%);
  font-size: 12px;
  letter-spacing: 1px;
`;

export const ProductDetailsTitle = styled.h1`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
  width: 400px;
`;

export const ProductDetailsDescription = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 13px;
  width: 345px;
  letter-spacing: 1px;
  color: hsl(219, 9%, 45%);
  @media (min-width: 768px) {
    font-size: 10px;
    width: 350px;
  }
`;

export const ProductDetailsPrice = styled.h1`
  font-family: "Kumbh Sans", sans-serif;
  margin: 0;
`;

export const ProductDetailsLastPrice = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  color: hsl(223, 4%, 42%);
  font-weight: 400;
  text-decoration: line-through;
  margin-top: 0;
  position: absolute;
  top: 41.3rem;
  left: 18rem;

  @media (min-width: 768px) {
    position: inherit;
    display: flex;
    align-items: flex-start;
  }
`;
