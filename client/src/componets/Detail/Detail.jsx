import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { characterDetail, cleanStateDetail } from "../../redux/actions";

const Detail = () => {
  const character = useSelector((estado) => estado.characterDetail);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(characterDetail(id));

    return () => dispatch(cleanStateDetail());
  }, [id]);

  return (
    <div className={style.container}>
      <img className={style.imagen} src={character.image && character.image} />
      <h1 className={style.name}>
      name : "{character.name && character.name}"
      </h1>
      <h1 className={style.name}>
      description : "{character.description && character.description}"
      </h1>
      <h1 className={style.name}>
      releaseDate : "{character.releaseDate && character.releaseDate}"
      </h1>
      <h1 className={style.name}>
      rating : "{character.rating && character.rating}"
      </h1>
      <h1 className={style.name}>
      platforms: "{character.platforms.name && character.platforms.name}"
      </h1>
      <h1 className={style.name}>Id : "{character.id && character.id}"</h1>
      <Link to="/home">
        <button className={style.btn}>home</button>
      </Link>
    </div>
  );
};
export default Detail;
