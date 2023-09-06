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
    setForm({ ...form, genre: updatedSelectedGenres });
  };

  

  const changeHandler = (event) => {
    const property = event.target.name; //propiedad del estado form = name del imput
    const value = event.target.value; // guardo el valuo (cuando tipeo en el imput)

    setForm({ ...form, [property]: value }); //seteo el etado del formulario con las values correspondientes

    setErrors(validations({ ...form, [property]: value })); //llamo a la funcion validate pasandole lo mismo que al setForm para que nop ocurra un desfasaje
  };

  // La función isFormValid verifica si no hay mensajes de error en el estado `errors`.
  const isFormValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  //funcion que previene el comportamiento default del submit (recargado de pagina) y hace la peticion post al backend
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

// import { useState } from "react";
// import "./Forms.css";
// import validations from "../Validations/validations"
// import axios from "axios";
// import { useSelector } from "react-redux";

// const Form = () => {
//   const genre = useSelector((state) => state.genres);
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     rating: "",
//     platforms: "",
//     releaseDate: "",
//     image: null,
//     genre:[],
//   });
//   console.log(form);

//   const [errors, setErrors] = useState({
//     name: "",
//     description: "",
//     rating: "",
//     platforms: "",
//     releaseDate: "",
//   });

//   const [selectedgenres, setSelectedgenres] = useState([]); // Estado local para mantener las genres seleccionadas

//   const checkboxChangeHandler = (event) => {
//     const value = event.target.value;

//     let updatedSelectedGenres;

//     // Actualizar las genres seleccionadas
//     if (event.target.checked) {
//       updatedSelectedGenres = [...selectedgenres, value];
//     } else {
//       updatedSelectedGenres = selectedgenres.filter((genre) => genre !== value);
//     }

//     // Actualizar el estado de genres seleccionados y el estado del formulario
//     setSelectedgenres(updatedSelectedGenres);
//     setForm({ ...form, genre: updatedSelectedGenres });
//   };

//   const setFile = (event) => {
//     const file = event.target.files[0];
//     console.log(event.target.files);
//     setForm({ ...form, image: URL.createObjectURL(file) });
//   };

//   const changeHandler = (event) => {
//     const property = event.target.name;
//     const value = event.target.value;

//     setForm({ ...form, [property]: value });

//     // Validar el campo actual y actualizar los errores
//     // const fieldErrors = validations({ ...form, [property]: value });
//     setErrors(validations({ ...form, [property]: value }));
//     console.log([property]);
//   };

//   // La función isFormValid verifica si no hay mensajes de error en el estado `errors`.
//   const isFormValid = () => {
//     return Object.values(errors).every((error) => error === "");
//   };

//   // funcion que previene el comportamiento default del submit (recargado de pagina) y hace la peticion post al backend
//   const submitHandler = (event) => {
//     event.preventDefault();

//     axios
//       .post("http://localhost:3000/videogames/post", form)
//       .then((res) => alert(res.data))
//       .catch((error) => alert(error));

//     setForm({
//       name: "",
//       description: "",
//       rating: "",
//       platforms: "",
//       releaseDate: "",
//     });
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       {/* {Object.keys(errors).length > 0 && (
//       <div className="error-container">
//         <p className="parrafo3">Por favor, corrige los errores antes de enviar el formulario.</p>
//       </div>
//     )} */}
//       <div className="container">
//         <input
//           type="text"
//           placeholder="name"
//           value={form.name}
//           name="name"
//           onChange={changeHandler}
//         ></input>
//         {errors.name && <p className="parrafo3">{errors.name}</p>}
//       </div>
//       <div className="container">
//         <input
//           type="text"
//           placeholder="description del juego"
//           value={form.description}
//           name="description"
//           onChange={changeHandler}
//         ></input>
//         {errors.description && <p className="parrafo3">{errors.description}</p>}
//       </div>
//       <div className="container">
//         <input
//           type="number"
//           placeholder="rating"
//           value={form.rating}
//           name="rating"
//           onChange={changeHandler}
//         ></input>
//         {errors.rating && <p className="parrafo3">{errors.rating}</p>}
//       </div>
//       <div className="container">
//         <input
//           type="text"
//           placeholder="platforms"
//           value={form.platforms}
//           name="platforms"
//           onChange={changeHandler}
//         ></input>
//         {errors.platforms && <p className="parrafo3">{errors.platforms}</p>}
//       </div>
//       <div className="container">
//         <input
//           type="text"
//           placeholder="releaseDate"
//           value={form.releaseDate}
//           name="releaseDate"
//           onChange={changeHandler}
//         ></input>
//       </div>
//       <div className="container">
//         {/* Renderizar checkboxes para cada genre */}
//         {genre.map((genre) => (
//           <label key={genre.id}>
//             <input
//               type="checkbox"
//               value={genre.name}
//               checked={selectedgenres.includes(genre.name)} // Marcar como seleccionado si está en la lista de genres seleccionadas
//               name="genre"
//               onChange={checkboxChangeHandler}
//             />
//             {genre.name}
//           </label>
//         ))}
//       </div>
//       <div className="checkBox">
//         <input type="file" name="image" onChange={setFile}></input>
//         {form.image && (
//           <img src={form.image} alt={form.image} className="imagePreview" />
//         )}
//       </div>
//       <button type="submit" disabled={!isFormValid()}>
//         Crear Juego
//       </button>
//     </form>
//   );
// };

// export default Form;

// // const submitHandler = (event) => {
// //   event.preventDefault();

// //   const formData = new FormData();
// //   formData.append("name", form.name);
// //   formData.append("description", form.description);
// //   formData.append("rating", form.rating);
// //   formData.append("platforms", form.platforms);
// //   formData.append("releaseDate", form.releaseDate);
// //   formData.append("genre", form.genre.join(",")); // Convertir el arreglo de géneros en una cadena
// //   formData.append("image", form.image); // Adjuntar la imagen

// //   axios
// //     .post("http://localhost:3000/videogames/post", formData)
// //     .then((res) => alert(res.data))
// //     .catch((error) => alert(error));

// //   setForm({
// //     // Restablecer el estado después del envío
// //     name: "",
// //     description: "",
// //     rating: "",
// //     platforms: "",
// //     releaseDate: "",
// //     genre: [],
// //     image: null,
// //   });
// // };

// import { useState } from "react";
// import Validations from "../Validations/validations";
// import style from "./Forms.module.css";
// import { NavLink } from "react-router-dom";

// const Forms = ({ login }) => {
//   const [userData, setUserData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     login(userData);
//   };

//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     setErrors(
//       Validations({ ...userData, [event.target.name]: event.target.value })
//     );
//     setUserData({ ...userData, [event.target.name]: event.target.value });
//   };

//   return (
//     <div className={style.home}>
//       <form className={style.contForm}>
//         <label className={style.label} htmlFor="email">
//           Email:
//         </label>
//         <input
//           className={style.input}
//           onChange={handleChange}
//           value={userData.email}
//           type="text"
//           name="email"
//         />
//         {errors.e1 ? (
//           <p className={style.parrafoError}>{errors.e1}</p>
//         ) : errors.e2 ? (
//           <p className={style.parrafoError}>{errors.e1}</p>
//         ) : (
//           <p className={style.parrafoError}>{errors.e1}</p>
//         )}

//         <label className={style.label} htmlFor="password">
//           Password:
//         </label>
//         <input
//           className={style.input}
//           onChange={handleChange}
//           value={userData.password}
//           type="text"
//           name="password"
//         />
//         {errors.p1 ? (
//           <p className={style.parrafoError}>{errors.p1}</p>
//         ) : (
//           <p className={style.parrafoError}>{errors.p1}</p>
//         )}

//         <button
//           className={style.btnSubmit}
//           onClick={handleSubmit}
//           type="submit"
//         >
//           Submit
//         </button>
//         <NavLink to="/registro">
//         <button className={style.btnHome}>si no tenes cuenta registrate aqui</button>
//       </NavLink>
//       </form>
//     </div>
//   );
// };

// export default Forms;
