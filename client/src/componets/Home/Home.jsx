//Primera forma buscar en el stado global de 120 video juegos
///////////////////////////////// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////                  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////                                       \\\\\\\\\\\\\\\\\\\\\\\
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPage, getGenres, getAllCharacters } from "../../redux/actions";
import "./Home.css";
import Cards from "../Cards/Cards";
import "../Cards/Cards.css";
import Loader from "../Loader/loader";

const Home = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const Character = useSelector((state) => state.allCharacters);
  let search = useSelector((state) => state.searchVideogame);
  const VideoGamePerPage = 10;
  const totalPage = Math.ceil(Character.length / VideoGamePerPage);
  const dispatch = useDispatch();

// console.log("soy el searcr",search);

useEffect(() => {
    if (Character.length === 0) {
      dispatch(getAllCharacters());
    } 
    dispatch(getGenres());
  }, []);

  const CharacterSlicer = () => {
    const startIndex = (currentPage - 1) * VideoGamePerPage;
    const endIndex = startIndex + VideoGamePerPage;
    
    return Character.slice(startIndex, endIndex);
  };
  // console.log("soy el Character", CharacterSlicer)

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      dispatch(setPage(currentPage + 1));
    }
  };

  if (Character.length === 0) {
    return <Loader />;
  }
  const handlePrevPage = () => {
    if (currentPage > 1) dispatch(setPage(currentPage - 1));
  };

  return search.length !== 0 && search.length < 15 ? (
    <div className="divAllVG">
      <Cards Character={search} />
    </div>
  ) : (
    <div className="divAllVG">
      <Cards Character={CharacterSlicer()} />
      <div>
        <button disabled={currentPage === 1} onClick={handlePrevPage}>
          PREV
        </button>
        {currentPage}/{totalPage}
        <button
          disabled={
            currentPage === Math.ceil(Character.length / VideoGamePerPage)
          }
          onClick={handleNextPage}
        >
          NEXT
        </button>
      </div>
       <hr />
      <footer className="footer">
        <div className="footer-content">
            <div className="footer-logo">
                <img src="https://th.bing.com/th/id/OIP.AC4_F1m6ZOdd56SH_aJJYwHaE8?pid=ImgDet&rs=1" alt="Logo"/>
            </div>
            <div className="footer-links">
                <a href="https://twitter.com/home">twitter</a>
                <a href="https://www.facebook.com/">faceboock</a>
                <a href="/feddBack">leave your feedback here</a>
        <p>All rights reserved by Pi-VideoGames-Lr inc.</p>
            </div>
        </div>
    </footer>
    </div>
  );
};
export default Home;

//seguna forma de busqueda directo a la api
//trayendo los primeros 15 video juegos q matcheen
///////////////////////////////// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////                  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////                                       \\\\\\\\\\\\\\\\\\\\\\\
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { setPage, getGenres, getAllCharacters } from "../../redux/actions";
// import "./Home.css";
// import Cards from "../Cards/Cards";
// import "../Cards/Cards.css";
// import Loader from "../Loader/loader";

// const Home = () => {
//   const currentPage = useSelector((state) => state.currentPage);
//   const Character = useSelector((state) => state.allCharacters);
//   let search = useSelector((state) => state.charactersByName);
//   const VideoGamePerPage = 10;
//   const totalPage = Math.ceil(Character.length / VideoGamePerPage);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (Character.length === 0) {
//       dispatch(getAllCharacters());
//     }
//     dispatch(getGenres());
//   }, []);

//   const CharacterSlicer = () => {
//     const startIndex = (currentPage - 1) * VideoGamePerPage;
//     const endIndex = startIndex + VideoGamePerPage;

//     return Character.slice(startIndex, endIndex);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPage) {
//       dispatch(setPage(currentPage + 1));
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) dispatch(setPage(currentPage - 1));
//   };

//   if (Character.length === 0) {
//     return <Loader />;
//   }

//   if (search.length === 0)
//   return (
// <div className="divAllVG">
//       <Cards Character={CharacterSlicer()} />
//       <div>
//         <button disabled={currentPage === 1} onClick={handlePrevPage}>
//           PREV
//         </button>
//         {currentPage}/{totalPage}
//         <button
//           disabled={
//             currentPage === Math.ceil(Character.length / VideoGamePerPage)
//           }
//           onClick={handleNextPage}
//         >
//           NEXT
//         </button>
//       </div>
//     </div>
//   );
//   return (
//     <div className="divAllVG">
//       <Cards Character={search} />
//     </div>
//   );
// };
// export default Home;
