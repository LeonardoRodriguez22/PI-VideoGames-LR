import axios from "axios";

export const getAllCharacters = () => {
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

export const searchVideogamePerName = (data) => {
  return { type: "SEARCH_VG_PER_NAME", payload: data };
};

export const alphabeticOrder = (order) => ({
  type: "ALPHABETIC_ORDER",
  payload: order,
});

export const numberOrder = (order) => ({
  type: "NUMERIC_ORDER",
  payload: order,
});

export const searchByGenre = (genre) => {
  return {
    type: "SEARCH_BY_GENRE",
    payload: genre,
  };
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

export const getByNameApi = (name) => {
  try {
    const endpoint = `http://localhost:3000/?name=${name}`;
    return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      // console.log(data);
      dispatch({
        type: "SEARCH_PER_NAME_API",
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

export const cleaner = () => {
  return { type: "CLEANER", payload: null };
};
