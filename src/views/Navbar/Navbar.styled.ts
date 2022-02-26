import styled from "styled-components";

import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
import { ReactComponent as MenuIcon } from "../../assets/icon-menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icon-close.svg";

export const NavStyled = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  display: flex;
  justify-content: space-between;
`;

export const NavWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuIconStyled = styled(MenuIcon)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding-top: 0.4em;
  @media (min-width: 768px) {
    display: none;
    padding: 0;
  }
`;

export const LogoStyled = styled.a`
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 0.5em;
  &:visited {
    color: ${({ theme }) => theme.color.colorVariant06};
  }
  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const CloseIconStyled = styled(CloseIcon)`
  width: 40px;
  height: 20px;
  cursor: pointer;
  padding: 2em;
`;

export const MenuStyled = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.colorVariant05};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  transition: max-width 0.5s ease-in-out;
  z-index: 1;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    overflow: initial;
    position: relative;
    height: 10vh;
  }
`;

export const MenuLinkStyled = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  &:visited {
    color: ${({ theme }) => theme.color.colorVariant06};
  }
  @media (min-width: 768px) {
    padding: 2.6em 1em;
    font-weight: inherit;
    color: ${({ theme }) => theme.color.colorVariant01};
    &:visited {
      color: ${({ theme }) => theme.color.colorVariant01};
    }
    &:hover {
      border-bottom: 4px solid ${({ theme }) => theme.color.colorVariant02};
    }
  }
`;

export const CartIconStyled = styled(CartIcon)`
  width: 40px;
  height: 20px;
  cursor: pointer;
`;

export const NavbarBadgeStyled = styled.div`
  border-radius: 50%;
  height: 17px;
  background-color: ${({ theme }) => theme.color.colorVariant02};
  width: 17px;
  color: ${({ theme }) => theme.color.colorVariant05};
  display: flex;
  justify-content: center;
  position: relative;
  top: -11px;
  right: 30px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const AvatarStyled = styled.img`
  width: 40px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 3px solid ${({ theme }) => theme.color.colorVariant02};
  }
`;

export const DividerStyled = styled.div`
  @media (min-width: 768px) {
    border-bottom: 1px solid rgba(156 150 150 / 50%);
    height: 0.6vh;
  }
`;
