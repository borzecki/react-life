import { range, xprod } from "ramda";

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1], // top neighbours
  [0, -1],
  [0, 1], // middle
  [1, -1],
  [1, 0],
  [1, 1], // bottom
];

const isActive = (id, list) => list.indexOf(id) > -1;
const toggleItem = (id, list) =>
  isActive(id, list) ? list.filter((k) => k !== id) : [id, ...list];

const withinBounds = (i, j, width, height) =>
  i >= 0 && i < width && j >= 0 && j < height;

// generate list of pairs of coordinates
// [[a, b]: for a in [0..x], b in [0..y]]
const coords = (rows, cols) => xprod(range(0, rows), range(0, cols));

// for given cell [i, j] return viable neighbours in flat form (x*cols + y)
const neighbourIndexes = (i, j, rows, cols) =>
  directions
    .map(([si, sj]) => [si + i, sj + j])
    .filter(([ni, nj]) => withinBounds(ni, nj, rows, cols))
    .map(([ni, nj]) => ni * cols + nj);

const activeNeighbours = (neighbours, active) =>
  neighbours.filter((n) => isActive(n, active)).length;

const nextGeneration = ({ active, rows, cols }) => {
  const result = Object.assign([], active);

  coords(rows, cols).forEach(([i, j]) => {
    const id = i * cols + j;
    const neighbours = activeNeighbours(
      neighbourIndexes(i, j, rows, cols),
      active
    );
    if (neighbours < 2 || neighbours > 3) {
      result.indexOf(id) !== -1 && result.splice(result.indexOf(id), 1);
    } else if (!isActive(id, active) && neighbours === 3) {
      result.push(id);
    }
  });

  return result;
};

const initialState = { rows: 10, cols: 20, active: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "resize": // update game dimensions
      return { ...state, rows: action.rows, cols: action.cols };
    case "toggle": // change state of individual cell
      return { ...state, active: toggleItem(action.id, state.active) };
    case "tick": // calculate next state of the game
      return { ...state, active: nextGeneration(state) };
    default:
      return state;
  }
};

export default reducer;
