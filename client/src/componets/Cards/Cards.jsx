import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ Character }) => {
  let id =0
  return (
    <div key={++id} className={style.container}>
      {Character?.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            description={character.description}
            releaseDate={character.releaseDate}
            rating={character.rating}
            platforms={character.platforms}
            genre={character.genre}
          />
        );
      })}
    </div>
  );
};
export default Cards;
