import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({
  name,
  id,
  image,
  description,
  releaseDate,
  rating,
  platforms,
}) => {
  return (
    <div className={style.tarjeta}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt="" />
      </Link>
      <h2>{id}</h2>
      <h2>{name}</h2>
      <h2>{description}</h2>
      <h2>{releaseDate}</h2>
      <h2>{rating}</h2>
      <h2>{platforms}</h2>

      <br />
    </div>
  );
};

export default Card;
