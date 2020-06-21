import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { tick, randomize } from "../actions";

const Button = styled.button`
  background: transparent;
  border: 1px solid #0003;
  color: #0007;
  width: 10em;
  height: 2em;
  font-size: 1em;
  margin: 0.5em;
`;

const Controls = () => {
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (play) {
      const interval = setInterval(() => dispatch({ type: "tick" }), 200);
      return () => clearInterval(interval);
    }
  }, [play]);

  return (
    <>
      <Button onClick={() => dispatch(tick())}>tick</Button>
      <Button active={play} onClick={() => setPlay(!play)}>
        {play ? "pause" : "play"}
      </Button>
      <Button onClick={() => dispatch(randomize())}>randomize</Button>
    </>
  );
};

export default Controls;
