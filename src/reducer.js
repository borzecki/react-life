const initialState = { rows: 10, cols: 20, active: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "resize":
      return { ...state, rows: action.rows, cols: action.cols };
    default:
      return state;
  }
};

export default reducer;
