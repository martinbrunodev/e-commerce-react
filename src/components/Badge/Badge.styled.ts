import styled from "styled-components";

export const BadgeStyled = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.color.colorVariant03};
  border-radius: 2px;
  opacity: 0.7;
  color: ${({ theme }) => theme.color.colorVariant02};
  width: 2.5em;
  padding: 0.3em;
  display: flex;
  justify-content: center;
`;
