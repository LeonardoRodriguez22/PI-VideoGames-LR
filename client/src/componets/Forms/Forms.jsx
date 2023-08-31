import { useState } from "react";
import Validations from "../Validations/validations";
import style from "./Forms.module.css";
import { NavLink } from "react-router-dom";

const Forms = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(
      Validations({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div className={style.home}>
      <form className={style.contForm}>
        <label className={style.label} htmlFor="email">
          Email:
        </label>
        <input
          className={style.input}
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.e1 ? (
          <p className={style.parrafoError}>{errors.e1}</p>
        ) : errors.e2 ? (
          <p className={style.parrafoError}>{errors.e1}</p>
        ) : (
          <p className={style.parrafoError}>{errors.e1}</p>
        )}

        <label className={style.label} htmlFor="password">
          Password:
        </label>
        <input
          className={style.input}
          onChange={handleChange}
          value={userData.password}
          type="text"
          name="password"
        />
        {errors.p1 ? (
          <p className={style.parrafoError}>{errors.p1}</p>
        ) : (
          <p className={style.parrafoError}>{errors.p1}</p>
        )}

        <button
          className={style.btnSubmit}
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
        <NavLink to="/registro">
        <button className={style.btnHome}>si no tenes cuenta registrate aqui</button>
      </NavLink>
      </form>
    </div>
  );
};

export default Forms;
