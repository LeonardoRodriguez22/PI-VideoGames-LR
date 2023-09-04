import { useState } from "react";
import "./Form.css";
import validate from "../../validations";
import axios from "axios";
import { useSelector } from "react-redux";

const Form = () => {
  const genres = useSelector((state) => state.genres);
  const [form, setForm] = useState({
    Nombre: "",
    Descripcion: "",
    Rating: "",
    Plataformas: "",
    FechaLanzamiento: "",
    Imagen: null,
    Genero: [],
  });
  console.log(form);

  const [errors, setErrors] = useState({
    Nombre: "",
    Descripcion: "",
    Rating: "",
    Plataformas: "",
    FechaLanzamiento: "",
  });

  const [selectedgenres, setSelectedgenres] = useState([]); // Estado local para mantener las generos seleccionadas

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
    setForm({ ...form, Genero: updatedSelectedGenres });
  };

  const setFile = (event) => {
    const file = event.target.files[0];
    console.log(event.target.files);
    setForm({ ...form, Imagen: URL.createObjectURL(file) });
  };

  const changeHandler = (event) => {
    const property = event.target.name; //propiedad del estado form = name del imput
    const value = event.target.value; // guardo el valuo (cuando tipeo en el imput)

    setForm({ ...form, [property]: value }); //seteo el etado del formulario con las values correspondientes

    setErrors(validate({ ...form, [property]: value })); //llamo a la funcion validate pasandole lo mismo que al setForm para que nop ocurra un desfasaje
  };

  // La función isFormValid verifica si no hay mensajes de error en el estado `errors`.
  const isFormValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  //funcion que previene el comportamiento default del submit (recargado de pagina) y hace la peticion post al backend
  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/videogames", form)
      .then((res) => alert(res.data))
      .catch((error) => alert(error));

    setForm({
      Nombre: "",
      Descripcion: "",
      Rating: "",
      Plataformas: "",
      FechaLanzamiento: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <input
          type="text"
          placeholder="Nombre"
          value={form.Nombre}
          name="Nombre"
          onChange={changeHandler}
        ></input>
        {errors.Nombre && <p className="parrafo3">{errors.Nombre}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Descripcion del juego"
          value={form.Descripcion}
          name="Descripcion"
          onChange={changeHandler}
        ></input>
        {errors.Descripcion && <p className="parrafo3">{errors.Descripcion}</p>}
      </div>
      <div className="container">
        <input
          type="number"
          placeholder="Rating"
          value={form.Rating}
          name="Rating"
          onChange={changeHandler}
        ></input>
        {errors.Rating && <p className="parrafo3">{errors.Rating}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Plataformas"
          value={form.Plataformas}
          name="Plataformas"
          onChange={changeHandler}
        ></input>
        {errors.Plataformas && <p className="parrafo3">{errors.Plataformas}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="FechaLanzamiento"
          value={form.FechaLanzamiento}
          name="FechaLanzamiento"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="container">
        {/* Renderizar checkboxes para cada genre */}
        {genres.map((genre) => (
          <label key={genre.ID}>
            <input
              type="checkbox"
              value={genre.Genero}
              checked={selectedgenres.includes(genre.Genero)} // Marcar como seleccionado si está en la lista de generos seleccionadas
              name="Genero"
              onChange={checkboxChangeHandler}
            />
            {genre.Genero}
          </label>
        ))}
      </div>
      <div className="checkBox">
        <input type="file" name="Imagen" onChange={setFile}></input>
        {form.Imagen && (
          <img src={form.Imagen} alt={form.Nombre} className="imagePreview" />
        )}
      </div>
      <button type="submit" disabled={!isFormValid()}>
        Crear Juego
      </button>
    </form>
  );
};
export default Form;