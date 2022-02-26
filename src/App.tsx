import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Navbar from "./views/Navbar/Navbar";
import ProductDetails from "./views/ProductDetails/ProductDetails";

import { AppContainerStyled } from "./App.styled";

import { theme } from "./theme";
import { ProductType } from "./customTypes/ProductType";
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
    <ThemeProvider theme={theme}>
      <AppContainerStyled>
        <Navbar
          itemCount={itemCount}
          product={product}
          setItemCount={setItemCount}
        />
        <ProductDetails
          itemCount={itemCount}
          setItemCount={setItemCount}
          product={product}
        />
      </AppContainerStyled>
    </ThemeProvider>
  );
};

export default App;
