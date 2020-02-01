const initState = "";

const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    case "LIST":
      return { ...state, list: action.list };

    case "ALBUM":
      return { ...state, album: action.album };

    default:
      return state;
  }
};

export default messagesReducer;
