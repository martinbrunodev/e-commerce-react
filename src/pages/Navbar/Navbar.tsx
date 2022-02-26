import React, { useState } from "react";

import Cart from "../../components/Cart/Cart";
import Avatar from "./../../assets/Martín.jpg";

import {
  NavStyled,
  NavWrapperStyled,
  MenuIconStyled,
  LogoStyled,
  MenuStyled,
  MenuLinkStyled,
  AvatarStyled,
  CartIconStyled,
  NavbarBadgeStyled,
  CloseIconStyled,
  DividerStyled,
} from "./Navbar.styled";

import { ProductType } from "../../types/ProductType";
interface Props {
  itemCount: number;
  product: ProductType;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: React.FC<Props> = ({ itemCount, product, setItemCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <NavStyled>
        <NavWrapperStyled>
          <MenuIconStyled onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </MenuIconStyled>
          <LogoStyled href="">sneakers</LogoStyled>
          <MenuStyled isOpen={isOpen}>
            <CloseIconStyled onClick={() => setIsOpen(!isOpen)} />
            <MenuLinkStyled href="">Collections</MenuLinkStyled>
            <MenuLinkStyled href="">Men</MenuLinkStyled>
            <MenuLinkStyled href="">Women</MenuLinkStyled>
            <MenuLinkStyled href="">About</MenuLinkStyled>
            <MenuLinkStyled href="">Contact</MenuLinkStyled>
          </MenuStyled>
        </NavWrapperStyled>
        <NavWrapperStyled>
          <CartIconStyled onClick={() => setShowCart(!showCart)} />
          <NavbarBadgeStyled>{itemCount}</NavbarBadgeStyled>
          <AvatarStyled src={Avatar} />
          <Cart
            showCart={showCart}
            setShowCart={setShowCart}
            product={product}
            itemCount={itemCount}
            setItemCount={setItemCount}
          />
        </NavWrapperStyled>
      </NavStyled>
      <DividerStyled></DividerStyled>
    </>
  );
};

export default Navbar;
