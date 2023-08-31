const initialState = {
    myFavorites: [],
    allCharacters: [],
    characterDetail: [],
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
  
      default:
        return { ...state };
    }
  };
  
  export default reducers;
  