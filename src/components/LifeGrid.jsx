import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  margin: 5%;
`;

const StyledCell = styled.div`
  border: 1px solid #0003;
  margin: 0.5px;
  cursor: pointer;

  display: grid;
  place-items: center;

  &::before {
    content: "";
    display: block;
    padding-bottom: 100%;
    grid-area: 1 / 1 / 2 / 2;
  }

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background: #dedbd2;
    }
  }

  ${({ isActive }) => isActive && `background: #ee6c4d;`};
`;

const Cell = ({ id, onClick }) => {
  const isActive = useSelector((state) => state.active.indexOf(id) > -1);
  return <StyledCell isActive={isActive} onClick={() => onClick(id)} />;
};

const LifeGrid = ({ cols, rows, toggleCell }) => {
  return (
    <Wrapper cols={cols}>
      {[...Array(rows * cols).keys()].map((i) => (
        <Cell key={i} id={i} onClick={toggleCell} />
      ))}
    </Wrapper>
  );
};

export default LifeGrid;
