
import style from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";

const NavBar = ({onSearch}) => {
  
const filtro = (event)=>{
}
  return (
    <div className={style.nav}>
      <NavLink to="/home">
        <button className={style.btnHome}>Home</button>
      </NavLink>

      <select onChange={filtro}>
        <option>filtrar por género</option>
        <option value="a-z">abc...xyz</option>
        <option value="z-a">xyz...abc</option>
        <option value="0-10">0123456</option>
        <option value="10-1">9876541</option>
      </select>
     
      <SearchBar onSearch={onSearch} />
      
    </div>
  );
};

export default NavBar;
