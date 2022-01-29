import styled from "styled-components";

export const IconStyled = styled.svg<{ isClickeable: boolean | undefined }>`
  display: flex;
  cursor: ${(props) => (props.isClickeable ? "pointer" : "inherit")};
`;

export const PathStyled = styled.path`
  display: flex;
`;