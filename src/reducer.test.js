import reducer, { initialState } from "./reducer";
import { toggle, resize, tick } from "./actions";

describe("reducer tests", () => {
  it("handles init action", () => {
    expect(reducer(undefined, {})).toEqual({
      rows: 10,
      cols: 20,
      active: [],
    });
  });

  it("handles resize action", () => {
    expect(reducer(initialState, resize(10, 10))).toEqual({
      rows: 10,
      cols: 10,
      active: [],
    });
  });

  it("handles toggle action", () => {
    expect(reducer(initialState, toggle(1))).toEqual({
      ...initialState,
      active: [1],
    });
  });

  it("handles untoggle action", () => {
    expect(reducer({ ...initialState, active: [1] }, toggle(1))).toEqual({
      ...initialState,
      active: [],
    });
  });

  // test blinker
  it("simulates oscilator", () => {
    expect(
      reducer({ cols: 3, rows: 3, active: [1, 4, 7] }, tick()).active
    ).toEqual([4, 3, 5]);
    expect(
      reducer({ cols: 3, rows: 3, active: [4, 3, 5] }, tick()).active
    ).toEqual([4, 1, 7]);
  });

  // test brick 2x2
  it("simulates static life", () => {
    expect(
      reducer({ cols: 2, rows: 2, active: [0, 1, 2, 3] }, tick()).active
    ).toEqual([0, 1, 2, 3]);
  });

  // single cell death
  it("anihilates single cell", () => {
    expect(reducer({ cols: 2, rows: 2, active: [1] }, tick()).active).toEqual(
      []
    );
  });
});
