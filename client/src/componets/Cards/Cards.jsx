import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ Character }) => {
  return (
    <div className="container">
      {Character.map((character) => {
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
