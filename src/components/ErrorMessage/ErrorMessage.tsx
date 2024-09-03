import React from "react";
import s from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => {
  return (
    <div className={s.errorWrapper}>
      <p>{text}</p>
    </div>
  );
};

export default ErrorMessage;
