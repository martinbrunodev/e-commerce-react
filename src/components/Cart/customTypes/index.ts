import { ProductType } from "../../../customTypes/ProductType";

export interface Props {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  product: ProductType;
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}
