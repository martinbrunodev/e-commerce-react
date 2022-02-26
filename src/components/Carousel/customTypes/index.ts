export interface Props {
  images: { src: string; id: number }[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
