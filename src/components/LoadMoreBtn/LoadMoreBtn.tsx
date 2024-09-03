import React from "react";
import s from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={s.btnShowMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
