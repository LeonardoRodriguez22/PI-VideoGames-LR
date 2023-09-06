import { useState } from "react";
import "./Forms.css";
import validations from "../Validations/validations";
import axios from "axios";
import { useSelector } from "react-redux";

const Form = () => {
  const genres = useSelector((state) => state.genres);
  const [form, setForm] = useState({
    name: "",
    description: "",
    rating: "",
    platforms: "",
    releaseData: "",
    image: "",
    genre: [],
  });
  console.log(form);

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

    // Actualizar las generos seleccionadas
    if (event.target.checked) {
      updatedSelectedGenres = [...selectedgenres, value];
    } else {
      updatedSelectedGenres = selectedgenres.filter((genre) => genre !== value);
    }

    // Actualizar el estado de generos seleccionados y el estado del formulario
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
      releaseData: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <input
          type="text"
          placeholder="name"
          value={form.name}
          name="name"
          onChange={changeHandler}
        ></input>
        {errors.name && <p className="parrafo3">{errors.name}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="description del juego"
          value={form.description}
          name="description"
          onChange={changeHandler}
        ></input>
        {errors.description && <p className="parrafo3">{errors.description}</p>}
      </div>
      <div className="container">
        <input
          type="number"
          placeholder="rating"
          value={form.rating}
          name="rating"
          onChange={changeHandler}
        ></input>
        {errors.rating && <p className="parrafo3">{errors.rating}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="platforms"
          value={form.platforms}
          name="platforms"
          onChange={changeHandler}
        ></input>
        {errors.platforms && <p className="parrafo3">{errors.platforms}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="releasedData"
          value={form.releaseData}
          name="releasedData"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="checkBox">
        <div className="checkbox-container">
          {genres.map((genre) => (
            <div key={genre.ID} className="checkbox-column">
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
      <div>
        <input
          type="text"
          name="image"
          onChange={changeHandler}
          placeholder="ingresa la url de tu imagen"
        ></input>
      </div>
      <button className="formButton" type="submit" disabled={!isFormValid()}>
        Crear Juego
      </button>
    </form>
  );
};
export default Form;
