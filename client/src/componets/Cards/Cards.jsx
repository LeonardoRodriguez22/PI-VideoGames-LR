import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({characters}) => {
  return (
    <div className={style.container}>
      {characters.map(
        ({ id, name, description, releaseDate, rating, platforms, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              description={description}
              releaseDate={releaseDate}
              rating={rating}
              platforms={platforms}
            />
          );
        }
      )}
    </div>
  );
};
export default Cards;
