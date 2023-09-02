import style from "./searchBar.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useState,  useEffect  } from "react";
import Card from "../Card/Card";
import {getByName} from "../../redux/actions";

export default function SearchBar({ onSearch }) {
  
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  const characters = useSelector((estado) => estado.charactersByName);
  const dispatch = useDispatch();
  
  console.log(characters);

  useEffect(() => {
     }, []);

  return (
    <div className={style.divInput}>
      <div className={style.divCardsByName}  key={characters.id}>
        <input
          className={style.inputSearch}
          type="search"
          onChange={handleChange}
          value={name}
        />
        <button
          className={style.btnSearch}
          onClick={() => {
            dispatch(getByName(name))
          }}
        >
        buscar por nombre
      </button>
      {characters&&
        characters.map((char) => {
          return (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              image={char.image}
              genre={char.genre}
              description={char.description}
              releaseDate={char.releaseDate}
              rating={char.rating}
              platforms={char.platforms}
            />
          );
        })}
    </div>
    </div>
  );
}
