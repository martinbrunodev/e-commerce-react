import styled from "styled-components";

export const IconStyled = styled.svg<{ isClickeable: boolean }>`
  display: flex;
  cursor: ${(props) => (props.isClickeable ? "pointer" : "inherit")};
`;
