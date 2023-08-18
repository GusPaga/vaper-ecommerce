import { FaArrowCircleUp } from "react-icons/fa";
import { goUp } from "../Helpers/goUp";
import "../components/styles.scss";

export const GoUp = () => {
  return (
    <div>
      <button onClick={() => goUp()} className="goup sticky-bottom">
        <FaArrowCircleUp /> GoUp
      </button>
    </div>
  );
};
