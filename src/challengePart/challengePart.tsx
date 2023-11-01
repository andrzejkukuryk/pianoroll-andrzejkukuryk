import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Thumbnail } from "./thumbnail";
import { usePianoRollContext } from "../data/pianoRollContext";
import { MainPianoRoll } from "./mainPianoRoll";

export function ChallengePart() {
  const { currentPianoRoll, pianoRollsThumbnails, refresh } =
    usePianoRollContext();

  const createThumbnails = () => {
    return pianoRollsThumbnails.map((pianoRoll, index) => (
      <Thumbnail content={pianoRoll} key={index} />
    ));
  };
  return (
    <Container>
      <button onClick={refresh}>refresh</button>
      <Row>
        {currentPianoRoll && <MainPianoRoll />}
        {createThumbnails()}
      </Row>
    </Container>
  );
}
