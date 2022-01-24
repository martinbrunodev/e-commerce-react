import styled from "styled-components";

export const IconStyled = styled.svg`
  display: flex;
  cursor: ${(props) => (props.isClickeable ? "pointer" : "inherit")};
`;
