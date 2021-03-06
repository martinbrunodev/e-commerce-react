import { useEffect } from "react";

import Carousel from "../Carousel/Carousel";
import { Props } from "./customTypes";
import { images } from "../../views/ProductDetails/images";
import { IconStyled, ModalStyled } from "./Modal.styled";

const Modal = ({ openModal, setOpenModal }: Props) => {
  const closeOnEscapeKeyDown = (event: KeyboardEvent): void => {
    if (openModal && event.key === "Escape") {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () =>
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    //eslint-disable-next-line
  }, [openModal]);

  return openModal ? (
    <ModalStyled>
      <IconStyled
        icon="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
        color="#FFF"
        width="40"
        height="40"
        onClick={() => setOpenModal(false)}
      />
      <Carousel
        images={images}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </ModalStyled>
  ) : null;
};

export default Modal;
