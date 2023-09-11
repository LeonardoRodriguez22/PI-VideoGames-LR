import { useState, useEffect } from "react";
import "./Forms.css";
import validations from "../Validations/validations";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCharacters } from "../../redux/actions";
import { Link } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const [form, setForm] = useState({
    name: "",
    description: "",
    rating: "",
    platforms: "",
    releaseDate: "",
    image: "",
    genre: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    rating: "",
    platforms: "",
    releasedData: "",
  });

  const [selectedgenres, setSelectedgenres] = useState([]); 

  const checkboxChangeHandler = (event) => {
    const value = event.target.value;

    let updatedSelectedGenres;

    if (event.target.checked) {
      updatedSelectedGenres = [...selectedgenres, value];
    } else {
      updatedSelectedGenres = selectedgenres.filter((genre) => genre !== value);
    }

    setSelectedgenres(updatedSelectedGenres);
    setForm({ ...form, genre: updatedSelectedGenres });
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    setErrors(validations({ ...form, [property]: value }));
  };

  const isFormValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    axios
    .post("http://localhost:3000/videogames/post", form)
    .then((res) => alert("tu juego a sido creado con exito"))
    .catch((error) => alert(error));
    
    setForm({
      name: "",
      description: "",
      rating: "",
      platforms: "",
      releaseDate: "",
    });
    
    setTimeout(function() {
      navigate("/home")
      dispatch(getAllCharacters());
        // console.log("¡El tiempo ha transcurrido!");
      }, 4000);
  };
  
 

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
      <Link to="/home">
        <button className="formButton" >home</button>
      </Link>
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="name of your video game"
          value={form.name}
          name="name"
          onChange={changeHandler}
        ></input>
        {errors.name && <p className="errorP">{errors.name}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Videogame description"
          value={form.description}
          name="description"
          onChange={changeHandler}
        ></input>
        {errors.description && <p className="errorP">{errors.description}</p>}
      </div>
      <div className="container">
        <input
          type="number"
          placeholder="Rating"
          value={form.rating}
          name="rating"
          onChange={changeHandler}
        ></input>
        {errors.rating && <p className="errorP">{errors.rating}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Platforms"
          value={form.platforms}
          name="platforms"
          onChange={changeHandler}
        ></input>
        {errors.platforms && <p className="errorP">{errors.platforms}</p>}
      </div>
      <div className="container">
        <input
          type="Date"
          placeholder="Releasedate"
          value={form.releaseDate}
          name="releaseDate"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="checkBox">
        <div className="checkbox-container">
          {genres.map((genre) => (
            <div key={genre.id} className="checkbox-column">
              <label className="checkbox-label">
                <input 
                  type="checkbox"
                  value={genre.name}
                  checked={selectedgenres.includes(genre.name)}
                  name="Genero"
                  onChange={checkboxChangeHandler}
                />
                {genre.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <input
          type="text"
          name="image"
          onChange={changeHandler}
          placeholder="Enter the url of your image"
        ></input>
      </div>
      <button className="formButton" type="submit" disabled={!isFormValid()}>
        Crear Juego
      </button>
    </form>
  );
};
export default Form;
