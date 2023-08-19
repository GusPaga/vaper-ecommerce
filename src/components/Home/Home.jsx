import { Carrousel } from "../Carrousel/Carrousel";
import { Cards } from "../Cards/Cards";
import { GoUp } from "../../components/GoUpButt";

export const Home = () => {
  return (
    <div>
      <Carrousel />
      <Cards />
      <GoUp />
    </div>
  );
};
