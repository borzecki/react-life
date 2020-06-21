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

  ${({ isActive }) => isActive && `background: green;`};
`;

const GameOfLife = () => {
  const dispatch = useDispatch();
  const { rows, cols, active } = useSelector((state) => state);

  return (
    <Wrapper cols={cols}>
      {[...Array(rows * cols).keys()].map((i) => (
        <Cell
          key={i}
          isActive={active.indexOf(i) > -1}
          onClick={() => dispatch({ type: "toggle", id: i })}
        />
      ))}
    </Wrapper>
  );
};

export default GameOfLife;