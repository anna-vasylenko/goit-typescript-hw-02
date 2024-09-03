import React from "react";
import s from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({
  description,
  likes,
  urls,
  user,
  handleOpenModal,
}) => {
  return (
    <div className={s.imageWrapper}>
      <img
        src={urls.small}
        alt={description}
        onClick={() => {
          handleOpenModal({
            description: description,
            likes: likes,
            url: urls.regular,
            user: user.name,
            userPhoto: user.profile_image.small,
          });
        }}
      />
    </div>
  );
};

export default ImageCard;
