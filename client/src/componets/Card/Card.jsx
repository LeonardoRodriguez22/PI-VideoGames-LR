import { Link } from "react-router-dom";
import "./Card.css";
import { useDispatch } from "react-redux";
import { getAllCharacters,cleaner } from "../../redux/actions";
import axios from "axios"


const Card = ({ name, id, image, rating, genre }) => {
const dispatch = useDispatch();
  
  const deleteHanler = ()=>{
    axios.delete( `http://localhost:3000/delete/${id}` )
    .then((res)=> alert(res.data))
    .catch((error)=> alert(error.data))
    
    setTimeout(function() {
      dispatch(getAllCharacters())
      dispatch(cleaner());
    }, 4000);
  }

  return (
    <div className={"tarjeta"}>
      {isNaN(id) && <button onClick={deleteHanler}>❌</button>}
      <Link to={`/detail/${id}`}>
        <img src={image} alt="" />
      </Link>
      <h2>{id}</h2>
      <h2>{name}</h2>
      <h2>{rating}</h2>
      <h2>{genre}</h2>
      <br />
    </div>
  );
};

export default Card;
