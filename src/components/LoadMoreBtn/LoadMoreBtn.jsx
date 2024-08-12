import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleClick }) => {
  return <button onClick={handleClick}>Load More</button>;
};

export default LoadMoreBtn;
