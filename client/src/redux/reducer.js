import { allCharacters } from "./actions";

const initialState = {
  allCharacters: [],
  allCharactersBackUp: [],
  searchVideogame: [],
  currentPage: 1,
  characterDetail: [],
  charactersByName: [],
  searchInput: "",
  genres: [],
};
console.log(initialState.searchInput);

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "CHARACTER_DETAIL":
      return {
        ...state,
        characterDetail: action.payload,
      };

    case "ALL_CHARACTERS":
      return {
        ...state,
        allCharacters: action.payload,
        allCharactersBackUp: action.payload, // Usa state.allCharacters
      };

    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "SEARCH_VG_PER_NAME":
      return {
        ...state,
        searchVideogame: action.payload,
      };

    case "ALPHABETIC_ORDER":
      const vGCopy = [...state.allCharacters];
      const videogamesShort = vGCopy.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (action.payload === "a") {
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        } else {
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        }
      });
      return {
        ...state,
        allCharacters: videogamesShort,
      };

    case "NUMERIC_ORDER":
      const vGCopy1 = [...state.allCharacters];
      const videogamesShort1 = vGCopy1.sort((a, b) => {
        const valueA = a.rating;
        const valueB = b.rating;
        if (action.payload === "a") {
          return valueA - valueB;
        } else {
          return valueB - valueA;
        }
      });
      return {
        ...state,
        allCharacters: videogamesShort1,
      };

    case "SEARCH_BY_GENRE":
      const genreToSearch = action.payload.toLowerCase();
      const filteredCharacters = state.allCharacters.filter((character) => {
        const genresArray = character.genre.split(", ");
        return genresArray.some(
          (genre) => genre.toLowerCase() === genreToSearch
        );
      });
      if (filteredCharacters.length === 0) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        allCharacters: filteredCharacters,
      };

    case "SET_DATA_FROM":
      const vGCopy2 = [...state.allCharactersBackUp];
      if (action.payload === "dataBase") {
        const videogamesFiltered = vGCopy2.filter((vg) => {
          if (isNaN(vg.id)) {
            return vg;
          }
        });
        return {
          ...state,
          allCharacters: videogamesFiltered,
        };
      } else {
        const vGCopy3 = [...state.allCharactersBackUp];
        const videogamesFiltered2 = vGCopy3.filter((vg) => {
          if (Number(vg.id)) {
            return vg;
          }
        });
        return {
          ...state,
          allCharacters: videogamesFiltered2,
        };
      }

    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };

    case "SEARCH_PER_NAME_API":
      return {
        ...state,
        charactersByName: action.payload,
      };

    case "CLEANER":
      return {
        ...state,
        allCharacters: state.allCharactersBackUp,
        charactersByName: [],
        characterDetail:[],
      };

    default:
      return { ...state };
  }
};

export default reducers;
