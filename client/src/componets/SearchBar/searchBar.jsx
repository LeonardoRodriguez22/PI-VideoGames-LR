import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchVideogame, chargerInputSearch } from "../../redux/actions";
import "./SearchBar.css";

//Primera forma buscar en el stado general

const Search = () => {
  const allVideogames = useSelector((state) => state.allCharacters);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");


  useEffect(() => {
      dispatch(chargerInputSearch(search));
    }, [search]);
  

  const handleChange = (event) => {
    setSearch(event.target.value);
    handleSearch();
  };
  

  const handleSearch = () => {
    const found = allVideogames.filter((videogames) =>
    videogames.name.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(searchVideogame(found));
  };
  console.log(search);

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="searchInput"
          type="text"
          placeholder="Busca tu Videogame"
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;


//seguna forma de busqueda directo a la api


// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { searchVideogame, chargerInputSearch } from "../../redux/actions";
// import "./SearchBar.css";


// const Search = () => {
//   const dispatch = useDispatch();
//   const [search, setSearch] = useState("");

//   const handleChange = (event) => {
//     setSearch(event.target.value);
//     handleSearch();
//   };
  

//   const handleSearch = () => {    
//     dispatch(getByName(data));
//   };
//   
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


