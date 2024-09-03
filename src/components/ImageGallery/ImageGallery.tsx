import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  handleOpenModal,
}) => {
  return (
    <ul className={s.galleryList}>
      {images?.map((item) => (
        <li key={item.id} className={s.galleryItem}>
          <ImageCard handleOpenModal={handleOpenModal} {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
