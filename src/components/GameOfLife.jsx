import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Controls from "./Controls";
import LifeGrid from "./LifeGrid";

import useWindowSize from "../hooks/useWindowSize";
import { defaultDimensions, mobileDimensions } from "../reducer";
import { toggle, resize } from "../actions";

const GameOfLife = () => {
  const { width } = useWindowSize();

  const dispatch = useDispatch();
  const rows = useSelector((state) => state.rows);
  const cols = useSelector((state) => state.cols);
  const toggleCell = (i) => dispatch(toggle(i));

  useEffect(() => {
    if (width > 768 && cols !== 70) dispatch(resize(defaultDimensions));
    if (width <= 768 && cols !== 30) dispatch(resize(mobileDimensions));
  }, [width, cols, dispatch]);

  return (
    <>
      <Controls />
      <LifeGrid cols={cols} rows={rows} toggleCell={toggleCell} />
    </>
  );
};

export default GameOfLife;
