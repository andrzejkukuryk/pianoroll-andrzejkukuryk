import React from "react";
import { Container } from "react-bootstrap";
import { usePianoRollContext } from "../data/pianoRollContext";
import { ThumbnailsView } from "./thubmnailsView";
import { MainPianoRollView } from "./mainPianoRollView";

// Displays the primary task view.

export function ChallengePart() {
  const { currentPianoRoll } = usePianoRollContext();

  return (
    <Container className="mt-4">
      {!currentPianoRoll && <ThumbnailsView />}
      {currentPianoRoll && <MainPianoRollView />}
    </Container>
  );
}
