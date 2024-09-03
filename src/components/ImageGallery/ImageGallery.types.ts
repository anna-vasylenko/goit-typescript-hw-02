import { Photo } from "../../services/api.types";
import { ModalContent } from "../App/App.types";

export interface ImageGalleryProps {
  images: Photo[];
  handleOpenModal: (content: ModalContent) => void;
}
