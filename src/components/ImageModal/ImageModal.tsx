import Modal from "react-modal";
import { GoHeart } from "react-icons/go";
import s from "./ImageModal.module.css";
import { ImageModalProps } from "./ImageModal.types";
import React from "react";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 20,
    width: "auto",
    height: "auto",
    maxWidth: "90vw",
    maxHeight: "90vh",
    border: "none",
  },
};

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  isOpenModal,
  closeModal,
  description,
  likes,
  user,
  userPhoto,
  url,
}) => {
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={s.modalWrapper}>
        <div className={s.userWrapper}>
          <img src={userPhoto} alt={user} />
          <p>{user}</p>
        </div>
        <img alt={description} src={url} />
        <div className={s.likesWrapper}>
          <GoHeart className={s.icon} />
          <p>{likes}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
