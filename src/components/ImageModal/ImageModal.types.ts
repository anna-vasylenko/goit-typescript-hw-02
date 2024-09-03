export interface ImageModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
  description: string;
  likes: number;
  user: string;
  userPhoto: string;
  url: string;
}
