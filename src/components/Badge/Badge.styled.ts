import styled from "styled-components";

export const BadgeStyled = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: ${(props) => props.theme.color.colorVariant03};
  border-radius: 2px;
  opacity: 0.7;
  color: ${(props) => props.theme.color.colorVariant02};
  width: 2.5em;
  padding: 0.3em;
  display: flex;
  justify-content: center;
`;
