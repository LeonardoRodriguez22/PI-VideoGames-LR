import { Link } from "react-router-dom";
import "./Card.css";
import { useDispatch } from "react-redux";
import { getAllCharacters} from "../../redux/actions";
import axios from "axios"


const Card = ({ name, id, image, genre }) => {
const dispatch = useDispatch();

const deleteHanler = ()=>{
  axios
  .delete( `http://localhost:3000/delete/${id}` )
  .then((res)=> alert(res.data))
  .then((res) => dispatch(getAllCharacters()))
  .catch((error)=> alert(error.data))
  }

  return (
    <div className={"tarjeta"}>
      {isNaN(id) && <button onClick={deleteHanler}>❌</button>}
      <Link to={`/detail/${id}`}>
        <img src={image} alt="" />
      </Link>
      <h2>{name}</h2>
      <h2>{genre}</h2>
      <br />
    </div>
  );
};

export default Card;
