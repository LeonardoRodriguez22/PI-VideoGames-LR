import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { characterDetail, cleanStateDetail} from "../../redux/actions";
import Loader from "../Loader/loader";

const Detail = () => {
  const character = useSelector((estado) => estado.characterDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(characterDetail(id));
    
    return () => dispatch(cleanStateDetail(id));
  }, [id]);
  
  if (character.length === 0) {
    return <Loader />;
  }
  
  return (
    <div className={style.container}>
      <Link to="/home">
        <button className={style.btn}>home</button>
      </Link>
      <img className={style.imagen} src={character.background_image  || character.image } />
      <h1 className={style.name}>name : "{character.name}"</h1>
      <h1 className={style.name}>description : "{character.description}"</h1>
      <h1 className={style.name}>releaseDate : "{character.releaseDate}"</h1>
      <h1 className={style.name}>rating : "{character.rating}"</h1>
      <h1 className={style.name}>platforms: "{character.platforms}"</h1>
      <h1 className={style.name}>genero: "{character.genres}"</h1>
      <h1 className={style.name}>Id : "{character.id}"</h1>
    </div>
  );
};
export default Detail;
