import { useState } from "react";

import { AppContainerStyled } from "./App.styled";
import Navbar from "./pages/Navbar/Navbar";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { ProductType } from "./Types/ProductType";

import product1 from "./assets/image-product-1.jpg";

const App = () => {
  const [itemCount, setItemCount] = useState(0);

  const product: ProductType = {
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everythingthe weather can offer.",
    price: 125,
    image: product1,
  };

  return (
    <AppContainerStyled>
      <Navbar itemCount={itemCount} product={product} setItemCount={setItemCount} />
      <ProductDetails
        itemCount={itemCount}
        setItemCount={setItemCount}
        product={product}
      />
    </AppContainerStyled>
  );
};

export default App;
