import axios from "axios";

  export const characterDetail = (id) => {
    try {
      const endpoint = "http://localhost:3000/videogames/" + id;
      return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({
          type: "CHARACTER_DETAIL",
          payload: data,
        });
      };
    } catch (error) {
      console.log(error);
    }
  };
  
  export const cleanStateDetail = () => {
    return { type: "CLEANER" };
  };




