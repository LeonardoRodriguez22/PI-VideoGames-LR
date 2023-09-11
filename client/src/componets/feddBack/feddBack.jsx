import "./feddBack.css"
import { Link, useNavigate } from "react-router-dom";

const FeddBack=()=> {
    const navigate = useNavigate()
    const handleFedd = () =>{
        navigate("/home")
    }
return (
    <div className="feddBack">
        <Link to="/home">
          <button >home</button>
        </Link>
        <h1>I hope you are free and leave us in detail, what you would change to the page to improve it</h1>
        <label >FeedBack Here:</label>
<textarea name="descripcion" id="descripcion" rows="5" cols="40"></textarea>
        <button onClick={handleFedd}>
            enviar
        </button>
    </div>
)
}



export default FeddBack