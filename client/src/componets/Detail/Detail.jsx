import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Detail.css";
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
      <div className={"container1"}>
        <Link to="/home">
          <button className={"btn1"}>home</button>
        </Link>
        <img className={"imagen1"} src={videoGameDetail.background_image  || videoGameDetail.image } />
        <h1 className={"name1"}>name : "{videoGameDetail.name}"</h1>
        <h1 className={"name1"}>description : "{videoGameDetail.description}"</h1>
        <h1 className={"name1"}>releaseDate : "{videoGameDetail.releaseDate}"</h1>
        <h1 className={"name1"}>rating : "{videoGameDetail.rating}"</h1>
        <h1 className={"name1"}>platforms: "{videoGameDetail.platforms}"</h1>
        <h1 className={"name1"}>genero: "{videoGameDetail.genre}"</h1>
        <h1 className={"name1"}>Id : "{videoGameDetail.id}"</h1>
      </div>
    );

  }
  

export default Detail;

