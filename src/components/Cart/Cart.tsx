import { useEffect, useRef } from "react";

import { Props } from "./customTypes";
import { useClickOutside } from "../../hooks/useClickOutside";
import {
  CartStyled,
  CartHeaderStyled,
  ProductTitleStyled,
  IconStyled,
  ProductWrapperStyled,
  ProductImageStyled,
  ButtonStyled,
  DividerStyled,
  EmptyCartStyled,
} from "./Cart.styled";

const Cart = ({
  showCart,
  product,
  itemCount,
  setItemCount,
  setShowCart,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const closeOnEscapeKeyDown = (event: KeyboardEvent): void => {
    if (showCart && event.key === "Escape") {
      setShowCart(false);
    }
  };

  const handleCancel = () => {
    setShowCart(false);
  };

  useClickOutside([ref], handleCancel);

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () =>
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    //eslint-disable-next-line
  }, [showCart]);

  return showCart ? (
    <>
      <CartStyled>
        <CartHeaderStyled>Cart</CartHeaderStyled>
        <DividerStyled />
        {itemCount > 0 ? (
          <>
            <ProductWrapperStyled>
              <ProductImageStyled src={product.image} />
              <ProductTitleStyled>
                {product.title} <br /> ${product.price}.00 x {itemCount}
                <span style={{ fontWeight: "bold" }}>
                  {"      "}${itemCount * product.price}.00
                </span>
              </ProductTitleStyled>
              <IconStyled
                color="hsl(219, 9%, 45%)"
                onClick={() => setItemCount(0)}
              />
            </ProductWrapperStyled>
            <ButtonStyled
              width="0"
              height="0"
              label="Checkout"
              color="#FFF"
              type="submit"
            />
          </>
        ) : (
          <EmptyCartStyled>Your cart is empty.</EmptyCartStyled>
        )}
      </CartStyled>
    </>
  ) : null;
};

export default Cart;
