import { Link } from "react-router-dom";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import Search from "../SearchBar/SearchBar";
import { numberOrder, alphabeticOrder, searchByGenre, cleaner, dataFrom} from "../../redux/actions";


function NavBar() {
  const dispatch = useDispatch();


  const handleNumberOrder = (event) => {
    const value = event.target.value;
    if (value === "1-9") {
      dispatch(numberOrder("a"));
    } else {
      dispatch(numberOrder("b"));
    }
  };

  const handleAlphabeticOrder = (event) => {
    const value = event.target.value;
    if (value === "A-Z") {
      dispatch(alphabeticOrder("a"));
    } else {
      dispatch(alphabeticOrder("b"));
    }
  };

 const  handleCleaner = ()=>{
  dispatch(cleaner())
 }

 const handleByGender =(event)=> {
 const value = event.target.value
   dispatch(searchByGenre(value)); 
 }

 const handleFromDate= (event)=>{
  const value = event.target.value
  dispatch(dataFrom(value))
}
  

  return (
    <div className="NavBar">
      <Link to={"/home"}>Home</Link>
      <Search></Search>
      <Link to={"/create"}>Crear</Link>
      <Link to={"/"}>Salir</Link>
      <button onClick={handleCleaner} >refresh</button>
      <select onChange={handleAlphabeticOrder}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <select onChange={handleNumberOrder}>
        <option value="1-9">1-9</option>
        <option value="9-1">9-1</option>
      </select>
      <label id="ByGenero">ByGenero</label>
      <select id="ByGenero" onChange={handleByGender}>
        <option value="Action">"Action"</option>
        <option value="Indie">"Indie"</option>
        <option value="RPG">"RPG"</option>
        <option value="Adventure">"Adventure"</option>
        <option value="Strategy">"Strategy"</option>
        <option value="Shooter">"Shooter"</option>
        <option value="Casual">"Casual"</option>
        <option value="Puzzle">"Puzzle"</option>
        <option value="Simulation">"Simulation"</option>
        <option value="Arcade">"Arcade"</option>
        <option value="Platformer">"Platformer"</option>
        <option value="Massively Multiplayer">"Massively Multiplayer"</option>
        <option value="Racing">"Racing"</option>
        <option value="Sports">"Sports"</option>
        <option value="Family">"Family"</option>
        <option value="Board Games">"Board Games"</option>
      </select>
      <select onChange={handleFromDate}>
        <option value="Api">Api</option>
        <option value="dataBase">dataBase</option>
        </select>
    </div>
  );
}
export default NavBar;
