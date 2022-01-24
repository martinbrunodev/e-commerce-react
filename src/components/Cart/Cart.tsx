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

import { ProductType } from "../../Types/ProductType";

interface Props {
  showCart: boolean;
  product: ProductType;
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}
const Cart: React.FC<Props> = ({ showCart, product, itemCount, setItemCount }) => {
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
              <IconStyled color="hsl(219, 9%, 45%)" onClick={()=>setItemCount(0)}/>
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
