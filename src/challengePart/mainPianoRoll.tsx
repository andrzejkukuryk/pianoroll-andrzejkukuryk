import React, { useEffect, useRef } from "react";
import { Col } from "react-bootstrap";
import { usePianoRollContext } from "../data/pianoRollContext";

export function MainPianoRoll() {
  const { currentPianoRoll } = usePianoRollContext();
  const pianoRoll = useRef(null);

  const prepareMainRoll = () => {
    const div = pianoRoll.current;

    if (div) {
      //@ts-ignore
      const svg = div.querySelector("svg");
      svg.setAttribute("height", "600");
      svg.setAttribute("width", "90%");
    }
  };

  useEffect(() => {
    prepareMainRoll();
  }, [currentPianoRoll]);

  return (
    <Col xs={8} className="p-0">
      <div ref={pianoRoll}>{currentPianoRoll}</div>
    </Col>
  );
}
