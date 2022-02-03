import { useState, useEffect } from "react";

import {
  CurrentImageStyled,
  ImageStyled,
  ImageWrapperStyled,
  ArrowNextStyled,
  ArrowPreviousStyled,
} from "./Carousel.styled";
interface Props {
  images: { src: string; id: number }[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Carousel: React.VFC<Props> = ({ images, openModal, setOpenModal }) => {
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);

  const nextImage = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
    setCurrentImage(images[index]);
  };

  const previousImage = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
    setCurrentImage(images[index]);
  };

  return (
    <div>
      <CurrentImageStyled
        src={currentImage.src}
        alt={currentImage.src}
        onClick={() => setOpenModal(true)}
      />
      <ImageWrapperStyled>
        {images.map((image) => (
          <ImageStyled
            src={image.src}
            alt={image.src}
            key={image.id}
            onClick={() => setCurrentImage(image)}
            selected={currentImage === image ? true : false}
          />
        ))}
      </ImageWrapperStyled>
      {openModal || window.innerWidth <= 768 ? (
        <>
          <ArrowPreviousStyled
            icon="M11 1 3 9l8 8"
            width="13"
            height="18"
            strokeWidth="3"
            fillRule="evenodd"
            color="none"
            stroke="#1D2026"
            onClick={() => previousImage()}
          />
          <ArrowNextStyled
            icon="m2 1 8 8-8 8"
            width="13"
            height="18"
            strokeWidth="3"
            fillRule="evenodd"
            color="none"
            stroke="#1D2026"
            onClick={() => nextImage()}
          />
        </>
      ) : null}
    </div>
  );
};

export default Carousel;
