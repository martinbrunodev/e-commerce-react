import { useState } from "react";

import {
  CurrentImageStyled,
  ImageStyled,
  ImageWrapperStyled,
} from "./Carousel.styled";

interface Props {
  images: string[];
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Carousel: React.VFC<Props> = ({ images, setOpenModal }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div>
      <CurrentImageStyled
        src={currentImage}
        alt={currentImage}
        onClick={() => setOpenModal(true)}
      />
      <ImageWrapperStyled>
        {images.map((image) => (
          <ImageStyled
            src={image}
            alt={image}
            key={image}
            onClick={() => setCurrentImage(image)}
            selected={currentImage === image ? true : false}
          />
        ))}
      </ImageWrapperStyled>
    </div>
  );
};

export default Carousel;
