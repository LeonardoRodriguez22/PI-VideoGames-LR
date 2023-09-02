const initialState = {
  allCharacters: [],
  currentPage: 1,
  characterDetail: [],
  charactersByName: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "CHARACTER_DETAIL":
      return {
        ...state,
        characterDetail: action.payload,
      };
    case "CLEANER":
      return {
        ...state,
        characterDetail: {},
      };
    case "ALL_CHARACTERS":
      return {
        ...state,
        allCharacters: action.payload, // Usa state.allCharacters
      };
    case "CHARACTERS_BY_NAME":
      return {
        ...state,
        charactersByName: action.payload, // Usa state.allCharacters
      };
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducers;
