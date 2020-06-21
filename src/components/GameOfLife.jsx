import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  margin: 5%;
`;

const Cell = styled.div`
  border: 1px solid #0003;
  height: 4rem;
  margin: 0.1rem;
`;

const GameOfLife = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.rows);
  const cols = useSelector((state) => state.cols);
  return (
    <Wrapper cols={cols}>
      {[...Array(rows * cols).keys()].map((i) => (
        <Cell
          key={i}
          onClick={() => dispatch({ type: "resize", rows: i + 1, cols: 20 })}
        />
      ))}
    </Wrapper>
  );
};

export default GameOfLife;
