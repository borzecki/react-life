const initialState = { rows: 10, cols: 20, active: [] };

const isActive = (id, list) => list.indexOf(id) > -1;
const toggleItem = (id, list) =>
  isActive(id, list) ? list.filter((k) => k !== id) : [id, ...list];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "resize":
      return { ...state, rows: action.rows, cols: action.cols };
    case "toggle":
      return { ...state, active: toggleItem(action.id, state.active) };
    default:
      return state;
  }
};

export default reducer;
