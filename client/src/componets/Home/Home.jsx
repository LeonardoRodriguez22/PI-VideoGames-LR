

/////////////// home con busqueda en blobal state////////////////


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allCharacters } from "../../redux/actions";
import { setPage } from "../../redux/actions";
import "./Home.css";
import Cards from "../Cards/Cards";

const Home = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const Character = useSelector((state) => state.allCharacters);
  let search = useSelector((state) => state.searchVideogame);
  const searchInput = useSelector((state) => state.searchInput);

  //condicionamos el estado global del input en home
  //para poder vaciar el estado global de busqueda y
  // asi poder volver a  renderisar las card de inicio
  if (searchInput === "") {
    search = [];
  }
  const VideoGamePerPage = 15;

  const dispatch = useDispatch();
  //peticion de todos los videogames
  useEffect(() => {
    if (Character.length === 0) {
      dispatch(allCharacters());
    }
  }, []);

  //slicer para obtener los videogames a renderizar por pagina
  const CharacterSlicer = () => {
    const startIndex = (currentPage - 1) * VideoGamePerPage;
    const endIndex = startIndex + VideoGamePerPage;

    return Character.slice(startIndex, endIndex);
  };

  //disparador de la action q carga el estado de paginas para cambiar una pagina adelante
  const handleNextPage = () => {
    const totalPage = Math.ceil(Character.length / VideoGamePerPage);
    if (currentPage < totalPage) {
      dispatch(setPage(currentPage + 1));
    }
  };

  //disparador de la action q carga el estado de paginas para cambiar una pagina atras
  const handlePrevPage = () => {
    if (currentPage > 1) dispatch(setPage(currentPage - 1));
  };

  //condicionamos el renderizado con 2 casos: si estamos buscado o no
  if (search.length === 0) {
    return (
      <div className="divAllVG">
        <Cards Character={CharacterSlicer()} />
        <div>
          <button disabled={currentPage === 1} onClick={handlePrevPage}>
            PREV
          </button>
          <button
            disabled={
              currentPage === Math.ceil(Character.length / VideoGamePerPage)
            }
            onClick={handleNextPage}
          >
            NEXT
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="divAllVG">
      <Cards Character={search} />
    </div>
  );
};

export default Home;




/////////////// home con busqueda en blobal state////////////////


// impor getByName from "../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { allCharacters } from "../../redux/actions";
// import { setPage } from "../../redux/actions";
// import "./Home.css";
// import Cards from "../Cards/Cards";

// const Home = () => {
//   const currentPage = useSelector((state) => state.currentPage);
//   const Character = useSelector((state) => state.allCharacters);
//   let charactersByName = useSelector((state) => state.charactersByName);

//   const VideoGamePerPage = 15;

//   const dispatch = useDispatch();
//   /
//   useEffect(() => {
//     if (Character.length === 0) {
//       dispatch(allCharacters());
//     }
//   }, []);

 
//     const startIndex = (currentPage - 1) * VideoGamePerPage;
//     const endIndex = startIndex + VideoGamePerPage;

//     return Character.slice(startIndex, endIndex);
//   };

 
//   const handleNextPage = () => {
//     const totalPage = Math.ceil(Character.length / VideoGamePerPage);
//     if (currentPage < totalPage) {
//       dispatch(setPage(currentPage + 1));
//     }
//   };

  
//   const handlePrevPage = () => {
//     if (currentPage > 1) dispatch(setPage(currentPage - 1));
//   };

  
//   if (charactersByName.length === 0) {
//     return (
//       <div className="divAllVG">
//         <Cards Character={CharacterSlicer()} />
//         <div>
//           <button disabled={currentPage === 1} onClick={handlePrevPage}>
//             PREV
//           </button>
//           <button
//             disabled={
//               currentPage === Math.ceil(Character.length / VideoGamePerPage)
//             }
//             onClick={handleNextPage}
//           >
//             NEXT
//           </button>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="divAllVG">
//       <Cards Character={charactersByName} />
//     </div>
//   );
// };

// export default Home;
