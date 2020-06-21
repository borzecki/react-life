import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { tick, randomize } from "../actions";

const ControlContainer = styled.div`
  margin: 5% 0 5% 5%;
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #0003;
  color: #0007;
  height: 2em;
  font-size: 1em;
  margin: 0.5em;
  width: 10em;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background: #dedbd2;
    }
  }

  ${({ isActive }) => isActive && `background: #ee6c4d; color: #fff`};
`;

const Controls = () => {
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();
  const sendTick = () => dispatch({ type: "tick" });
  useEffect(() => {
    if (play) {
      const interval = setInterval(sendTick, 200);
      return () => clearInterval(interval);
    }
  });

  return (
    <ControlContainer>
      <Button onClick={() => dispatch(tick())}>tick</Button>
      <Button isActive={play} onClick={() => setPlay(!play)}>
        {play ? "pause" : "play"}
      </Button>
      <Button onClick={() => dispatch(randomize())}>randomize</Button>
    </ControlContainer>
  );
};

export default Controls;
