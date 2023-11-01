import React from "react";
import { Col } from "react-bootstrap";
import { usePianoRollContext } from "../data/pianoRollContext";

export function MainPianoRoll() {
  const { currentPianoRoll } = usePianoRollContext();
  return <Col xs={8}></Col>;
}
