import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/loader";
import axios from "axios"

const Detail = () => {
  const { id } = useParams();
  const [videoGameDetail, setVideoGameDetail] = useState({})
  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/videogames/${id}`)
      .then(({ data }) => {
        setVideoGameDetail(data);
      })
      .catch((error) => {
        alert("Error al obtener los detalles de videogame:", error);
      });
  }, [id]);
  
  if (!videoGameDetail.id) {
    return <Loader />;
  }
    return (
      <div className={style.container}>
        <Link to="/home">
          <button className={style.btn}>home</button>
        </Link>
        <img className={style.imagen} src={videoGameDetail.background_image  || videoGameDetail.image } />
        <h1 className={style.name}>name : "{videoGameDetail.name}"</h1>
        <h1 className={style.name}>description : "{videoGameDetail.description}"</h1>
        <h1 className={style.name}>releaseDate : "{videoGameDetail.releaseDate}"</h1>
        <h1 className={style.name}>rating : "{videoGameDetail.rating}"</h1>
        <h1 className={style.name}>platforms: "{videoGameDetail.platforms}"</h1>
        <h1 className={style.name}>genero: "{videoGameDetail.genres}"</h1>
        <h1 className={style.name}>Id : "{videoGameDetail.id}"</h1>
      </div>
    );

  }
  

export default Detail;

