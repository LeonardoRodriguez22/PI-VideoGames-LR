import { allCharacters } from "./actions";

const initialState = {
  allCharacters: [],
  allCharactersBackUp: [],
  searchVideogame: [],
  currentPage: 1,
  characterDetail: [],
  charactersByName: [],
  searchInput: "",
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
    case "SEARCH":
      return {
        ...state,
        searchVideogame: action.payload,
      };
    case "CHARGER_INPUT_SEARCH":
      return {
        ...state,
        searchInput: action.payload,
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
        const genresArray = character.genre.split(", "); // Divide la cadena de géneros en un array

        // Verifica si el género deseado está presente en el array de géneros
        return genresArray.some(
          (genre) => genre.toLowerCase() === genreToSearch
        );
      });
      if (filteredCharacters.length === 0) {
        // Si no se encontraron resultados, devuelve el estado general original
        return {
          ...state,
        };
      }
      return {
        ...state,
        allCharacters: filteredCharacters,
      };
    case "CLEANER":
      return {
        ...state,
        allCharacters: state.allCharactersBackUp,
      };

      case "SET_DATA_FROM":
        const isFromDatabase = action.payload === "dataBase";
      
        const filteredCharacters1 = [...state.allCharacters].filter((character) => {
          if (isFromDatabase && character.creado) {
            return character;
          } else if (!isFromDatabase && !character.creado) {
            return character;
          }
        });
        return { ...state, allCharacters: filteredCharacters1 };
      

  //     case "SET_DATA_FROM":
  //     const isFromDatabase = action.payload === "dataBase";
  //     const filteredCharacters = state.allCharacters.filter((character) =>({
   
  //       if (isFromDatabase) {return if(character.creado){return character}}
  //     })
  //  return character 
  // }

  // return { ...state, allCharacters: filteredCharacters };
  
    // case "DATA_FROM":
    //   const copy = [...state.allCharacters];
    //   if (action.payload === "dataBase") {
    //     const copyFilter = copy.filter((vg) => {
    //       return vg.creado ? vg : null;
    //     });
    //   return {...state, allCharacters: copyFilter}
    //   }
      // if (action.payload === "Api") {
      //   const copyFilter = copy.filter((vg) => {
      //     return !vg.creado ? vg : null;
      //   });
      // return {...state, allCharacters: copyFilter} 
      // }
    default:
      return { ...state };
  }
};

export default reducers;

// case "CHARACTERS_BY_NAME":
//   return {
//     ...state,
//     charactersByName: action.payload, // Usa state.allCharacters
//   };

//   case "CLEAN_SEARCH":
// return {
//   ...state,
//   searchVideogame: [],
// };
