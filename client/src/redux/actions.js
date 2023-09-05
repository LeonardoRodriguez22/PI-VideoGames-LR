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
  return { type: "CLEANER1" };
};

export const allCharacters = () => {
  try {
    const endpoint = "http://localhost:3000/videogames/";
    return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      // console.log(data);
      dispatch({
        type: "ALL_CHARACTERS",
        payload: data,
      });
    };
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};

export const setPage = (pageNumber) => ({
  type: "SET_PAGE",
  payload: pageNumber,
});

export const orderCards = (order) => ({
  type: "ALPHABETIC_ORDER",
  payload: order,
});

export const orderCardsByName = (order) => ({
  type: "NUMERIC_ORDER",
  payload: order,
});
export const searchByGenre = (genre) => {
  return {
    type: "SEARCH_BY_GENRE",
    payload: genre,
  };
};

export const searchVideogame = (data) => {
  return { type: "SEARCH", payload: data };
};


export const cleaner = () => {
  return { type: "CLEANER", payload: null };
};

export const dataFrom = (value) => {
  return { type: "SET_DATA_FROM", payload: value };
};
export const getGenres = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3000/genres");

    const apiGenres = data;
    dispatch({ type: "GET_GENRES", payload: apiGenres });
  };
};

// export const getByName = (name) => {
//   try {
//     const endpoint =`http://localhost:3000/?name=${name}`;
//     return async (dispatch) => {
//       const { data } = await axios.get(endpoint);
//       // console.log(data);
//       dispatch({
//         type: "CHARACTERS_BY_NAME",
//         payload: data,
//       });
//     };
//   } catch (error) {
//     console.error("Error al obtener datos:", error);
//   }
// };

  // 