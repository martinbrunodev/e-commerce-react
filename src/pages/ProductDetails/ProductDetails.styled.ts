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
  color: ${(props) => props.theme.color.colorVariant02};
  font-size: ${(props) => props.theme.fontSize.s};
  letter-spacing: 1px;
`;

export const ProductDetailsTitle = styled.h1`
  font-family: "Kumbh Sans", sans-serif;
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  letter-spacing: 1px;
  margin: 0;
  width: 400px;
`;

export const ProductDetailsDescription = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  font-size: ${(props) => props.theme.fontSize.m};
  width: 345px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.color.colorVariant01};
  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.xs};
    width: 350px;
  }
`;

export const ProductDetailsPrice = styled.h1`
  font-family: "Kumbh Sans", sans-serif;
  margin: 0;
`;

export const ProductDetailsLastPrice = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  color: ${(props) => props.theme.color.colorVariant01};
  font-weight: ${(props) => props.theme.fontWeight.light};
  text-decoration: line-through;
  margin-top: 0;
  position: absolute;
  top: 42.3rem;
  left: 18rem;

  @media (min-width: 768px) {
    position: inherit;
    display: flex;
    align-items: flex-start;
  }
`;
