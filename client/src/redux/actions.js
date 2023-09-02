
import axios from "axios";

export const characterDetail = (id) => {
  try {
    const endpoint = "http://localhost:3000/videogames/" + id;
    return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      // console.log(data);
      return dispatch({
        type: "CHARACTER_DETAIL",
        payload: data,
      });
    };
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};

export const cleanStateDetail = () => {
  return { type: "CLEANER" };
};

export const allCharacters = () => {
  try {
    const endpoint = "http://localhost:3000/videogames/";
    return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      // console.log(data);
      dispatch({
        type:"ALL_CHARACTERS",
        payload: data,
      });
    };
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};

export const getByName = (name) => {
  try {
    const endpoint =`http://localhost:3000/?name=${name}`;
    return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      // console.log(data);
      dispatch({
        type: "CHARACTERS_BY_NAME",
        payload: data,
      });
    };
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};
// actions.js
export const setPage = (pageNumber) => ({
  type: 'SET_PAGE',
  payload: pageNumber,
});




// export const setPage = (page) => {
//   try {
//     const endpoint =`http://localhost:3000/videogames/`;
//     return async (dispatch) => {
//       const { data } = await axios.get(endpoint);
//       console.log(data);
//       dispatch({
//         type: 'SET_PAGE',
//         payload: data.slice(40, 120),
//       });
//     };
//   } catch (error) {
//     console.error("Error al obtener datos:", error);
//   }
// };




