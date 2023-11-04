import React from "react";
import { Container } from "react-bootstrap";
import { usePianoRollContext } from "../data/pianoRollContext";
import { ThumbnailsView } from "./thubmnailsView";
import { MainPianoRollView } from "./mainPianoRollView";

export function ChallengePart() {
  const { currentPianoRoll } = usePianoRollContext();

  return (
    <Container>
      {!currentPianoRoll && <ThumbnailsView />}
      {currentPianoRoll && <MainPianoRollView />}
    </Container>
  );
}
