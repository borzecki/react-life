import { mergeRight } from "ramda";
import { randomize, nextGeneration, toggleItem } from "./utils";

export const initialState = { rows: 10, cols: 20, active: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "resize": // update game dimensions
      return mergeRight(state, { rows: action.rows, cols: action.cols });
    case "toggle": // change state of individual cell
      return mergeRight(state, { active: toggleItem(action.id, state.active) });
    case "tick": // calculate next state of the game
      return mergeRight(state, { active: nextGeneration(state) });
    case "randomize": // randomize active cells
      return mergeRight(state, { active: randomize(state.rows * state.cols) });
    default:
      return state;
  }
};
