


/////////Home Component

// import { useEffect } from "react";
// import CardsContainer from "../../Components/Cards/CardsContainer";
// import { useDispatch, useSelector } from "react-redux";
// import { getVideogames, getGenres } from "../../Redux/Actions";

// const Home = () => {
//   const videogames = useSelector((state) => state.videogames);
//   const search = useSelector((state) => state.searchVideogame);

//   const allVideogames = search.length !== 0 ? search : videogames;

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (videogames.length === 0) {
//       dispatch(getVideogames());
//     }
//     dispatch(getGenres());
//   }, []);

//   return (
//     <div>
//       <CardsContainer allVideogames={allVideogames}></CardsContainer>
//     </div>
//   );
// };
// export default Home;
 

/////////////////ACtions


// import axios from "axios";
// export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
// export const GET_GENRES = "GET_GENRES";
// export const SEARCH = "SEARCH";

// export const getVideogames = () => {
//   return async (dispatch) => {
//     const { data } = await axios.get("http://localhost:3001/videogames");

//     const apiVideogames = data;
//     dispatch({ type: GET_VIDEOGAMES, payload: apiVideogames });
//   };
// };

// export const searchVideogame = (data) => {
//   return { type: SEARCH, payload: data };
// };

// export const getGenres = () => {
//   return async (dispatch) => {
//     const { data } = await axios.get("http://localhost:3001/genres");

//     const apiGenres = data;
//     dispatch({ type: GET_GENRES, payload: apiGenres });
//   };
// };


////////// reducer


// const initialState = {
//   videogames: [],
//   searchVideogame: [],
//   genres: [],
// };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case GET_VIDEOGAMES:
//       return { ...state, videogames: payload };

//     case SEARCH:
//       return { ...state, searchVideogame: payload };

//     case GET_GENRES:
//       return { ...state, genres: payload };

//     default:
//       return { ...state };
//   }
// };

// export default reducer;









  