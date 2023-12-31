import { Link } from "react-router-dom";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Search from "../SearchBar/SearchBar";
import {
  numberOrder,
  alphabeticOrder,
  searchByGenre,
  dataFrom,
  cleaner,
} from "../../redux/actions";

function NavBar() {
  const dispatch = useDispatch();
  const name1 = "search by genre";

  const handleNumberOrder = (event) => {
    const value = event.target.value;
    if (value === "clear") {
      dispatch(cleaner());
    } else {
      if (value === "1-9") {
        dispatch(numberOrder("a"));
      } else {
        dispatch(numberOrder("b"));
      }
    }
  };

  const handleAlphabeticOrder = (event) => {
    const value = event.target.value;
    if (value === "clear") {
      dispatch(cleaner());
    } else {
      if (value === "A-Z") {
        dispatch(alphabeticOrder("a"));
      } else {
        dispatch(alphabeticOrder("b"));
      }
    }
  };

  const handleByGender = (event) => {
    const value = event.target.value;
    if (value === "clear") {
      dispatch(cleaner());
    } else {
      dispatch(searchByGenre(value));
    }
  };

  const handleFromDate = (event) => {
    const value = event.target.value;
    if (value === "clear") {
      dispatch(cleaner());
    } else {
      dispatch(dataFrom(value));
    }
  };

 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <div>
        <Search id="mobile-search-bar"></Search>
      </div>
      <div className="NavBar" id="menu-items">
        <button>
          <Link to={"/create"}>Create</Link>
        </button>
        <select id="ByGenero" onChange={handleByGender}>
          <option value="clear">{name1}</option>
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
          <option value="Educational">"Educational"</option>
          <option value="Fighting">"Fighting"</option>
          <option value="Card">"Card"</option>
        </select>
        <select id="ByGenero" onChange={handleAlphabeticOrder}>
          <option value="clear">Alphabetic orders</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select id="ByGenero" onChange={handleNumberOrder}>
          <option value="clear">Number order</option>
          <option value="1-9">1-9</option>
          <option value="9-1">9-1</option>
        </select>
        <select id="ByGenero" onChange={handleFromDate}>
          <option value="clear">Date From</option>
          <option value="Api">Api</option>
          <option value="dataBase">dataBase</option>
        </select>
        <button>
          <Link to={"/"}>Exit</Link>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={closeMobileMenu}>Cerrar</button>
          <div className="navBar">
            <button>
              <Link to={"/create"}>Create</Link>
            </button>
            <select id="ByGenero" onChange={handleByGender}>
              <option value="clear">{name1}</option>
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
              <option value="Massively Multiplayer">
                "Massively Multiplayer"
              </option>
              <option value="Racing">"Racing"</option>
              <option value="Sports">"Sports"</option>
              <option value="Family">"Family"</option>
              <option value="Board Games">"Board Games"</option>
              <option value="Educational">"Educational"</option>
              <option value="Fighting">"Fighting"</option>
              <option value="Card">"Card"</option>
            </select>
            <select id="ByGenero" onChange={handleAlphabeticOrder}>
              <option value="clear">Alphabetic orders</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
            <select id="ByGenero" onChange={handleNumberOrder}>
              <option value="clear">Number order</option>
              <option value="1-9">1-9</option>
              <option value="9-1">9-1</option>
            </select>
            <select id="ByGenero" onChange={handleFromDate}>
              <option value="clear">Date From</option>
              <option value="Api">Api</option>
              <option value="dataBase">dataBase</option>
            </select>
            <button>
              <Link to={"/"}>Exit</Link>
            </button>
          </div>
        </div>
      )}
          
      <button className="menu-icon" onClick={openMobileMenu}>
        ☰
      </button>
    </div>
  );
}
export default NavBar;
