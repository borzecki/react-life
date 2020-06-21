import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { tick, randomize } from "../actions";
import useInterval from "../hooks/useInterval";

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
  cursor: pointer;

  @media (min-width: 768px) {
    width: 15em;
  }

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
  const sendTick = () => dispatch(tick());

  // send tick every 100ms if play is active
  useInterval(sendTick, play ? 100 : null);

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
