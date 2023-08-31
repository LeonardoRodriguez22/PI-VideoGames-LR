import style from "./searchBar.module.css"

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        className={style.inputSearch}
        type="search"
        onChange={handleChange}
        value={name}
      />
      <button
        className={style.btnSearch}
        onClick={() => {
          onSearch(name);
        }}
      >
        buscar por nombre
      </button>
    </div>
  );
}
