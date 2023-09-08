const initialState = {
  allCharacters: [],
  charactersByGenre:[],
  allCharactersBackUp: [],
  searchVideogame: [],
  searchVideogameBackUp: [],
  currentPage: 1,
  characterDetail: [],
  charactersByName: [],
  genres: [],
};
console.log(initialState.searchInput);

const reducers = (state = initialState, action) => {
  switch (action.type) {

    case "ALL_CHARACTERS":
      return {
        ...state,
        allCharacters: action.payload,
        allCharactersBackUp: action.payload,
      };

    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      searchVideogameBackUp: action.payload,
      };

    case "SEARCH_VG_PER_NAME":
      return {
        ...state,
        searchVideogame: action.payload,
        searchVideogameBackUp: action.payload,
      };

case "ALPHABETIC_ORDER":
  const vGCopy = [...state.allCharactersBackUp];
  const videogamesSorted = vGCopy.sort((a, b) => {
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

  const vGCopy1 = [...state.searchVideogameBackUp];
  const searchAlphabetic = vGCopy1.sort((a, b) => {
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
    allCharacters: videogamesSorted,
    searchVideogame: searchAlphabetic,
  };

case "NUMERIC_ORDER":
  const vGCopy2 = [...state.allCharactersBackUp];
  const videogamesShort1 = vGCopy2.sort((a, b) => {
    const valueA = a.rating;
    const valueB = b.rating;
    if (action.payload === "a") {
      return valueA - valueB;
    } else {
      return valueB - valueA;
    }
  });
  const vGCopy3 = [...state.searchVideogameBackUp];
  const searchVideogameSort2 = vGCopy3.sort((a, b) => {
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
    searchVideogame: searchVideogameSort2,
  };

    case "SEARCH_BY_GENRE":
      const copyGenre = [...state.allCharactersBackUp]
      const genreToSearch = action.payload
      const filteredCharacters = copyGenre.filter((character) => {
        const genresArray = character.genre.split(", ");
        return genresArray.includes(genreToSearch);
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
      const vGCopy4 = [...state.allCharactersBackUp];
      if (action.payload === "dataBase") {
        const videogamesFiltered = vGCopy4.filter((vg) => {
          if (isNaN(vg.id)) {
            return vg;
          }
        });
        return {
          ...state,
          allCharacters: videogamesFiltered,
        };
      } else {
        const vGCopy5 = [...state.allCharactersBackUp];
        const videogamesFiltered2 = vGCopy5.filter((vg) => {
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
      };

    default:
      return { ...state };
  }
};

export default reducers;
