import { mergeRight } from "ramda";
import { randomize, nextGeneration, toggleItem } from "./utils";

export const mobileDimensions = { rows: 40, cols: 30 };
export const defaultDimensions = { rows: 30, cols: 70 };

export const initialState = { ...defaultDimensions, active: [] };

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
