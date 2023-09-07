//Primera forma buscar en el stado global de 120 video juegos
///////////////////////////////// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////                  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////                                       \\\\\\\\\\\\\\\\\\\\\\\
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchVideogamePerName } from "../../redux/actions";
import "./SearchBar.css";

const Search = () => {
  const allVideogames = useSelector((state) => state.allCharacters);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    handleSearch();
  };

  const handleSearch = () => {
    const found = allVideogames.filter((videogames) =>
      videogames.name.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(searchVideogamePerName(found));
  };
  console.log(search);

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="searchInput"
          type="text"
          placeholder="Find your favorite video game"
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;

//seguna forma de busqueda directo a la api
//trayendo los primeros 15 video juegos q matcheen
///////////////////////////////// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////                  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////                                       \\\\\\\\\\\\\\\\\\\\\\\
// import { useState} from "react";
// import { useDispatch } from "react-redux";
// import {getByNameApi} from "../../redux/actions";
// import "./SearchBar.css";

// const Search = () => {
//   const dispatch = useDispatch();
//   const [search, setSearch] = useState("");

//   const handleChange = (event) => {
//     setSearch(event.target.value);
//     handleSearch();
//   };

//   const handleSearch = () => {
//     dispatch(getByNameApi(search));
//   };

//   return (
//     <div className="search-container">
//       <div className="search-bar">
//         <input
//           className="searchInput"
//           type="text"
//           placeholder="Busca tu Videogame"
//           value={search}
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default Search;
