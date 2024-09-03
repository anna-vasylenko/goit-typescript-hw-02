import { ModalContent } from "./../App/App.types";
import { Urls, User } from "../../services/api.types";

export interface ImageCardProps {
  description: string;
  likes: number;
  urls: Urls;
  user: User;
  handleOpenModal: (content: ModalContent) => void;
}
