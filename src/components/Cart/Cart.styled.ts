import styled from "styled-components";
import Button from "../Button/Button";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";

export const CartStyled = styled.div`
  width: 70%;
  height: 20%;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 5.3px 7.3px 1em -6px #000;
  position: absolute;
  top: 79px;
  right: 45px;
  padding: 1em;

  @media (min-width: 768px) {
    right: 326px;
    width: 250px;
    height: 150px;
    top: 100px;
  }
`;

export const CartHeaderStyled = styled.h6`
  margin: 0 0 0 1.6em;
`;

export const DividerStyled = styled.div`
  border-bottom: 1px solid rgba(156 150 150 / 50%);
  height: 0.6vh;
  width: 100%;
`;

export const ProductWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const ProductTitleStyled = styled.p`
  font-size: 12px;
  word-spacing: 1px;
  line-height: 20px;
  color: hsl(219, 9%, 45%);
  span {
    color: #000;
  }
`;

export const IconStyled = styled(DeleteIcon)`
  cursor: pointer;
`;

export const ProductImageStyled = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

export const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 90%;
  margin-top: 1em;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const EmptyCartStyled = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3em;
  font-size: 13px;
  color: hsl(219, 9%, 45%);
  font-weight: 700;
`;
