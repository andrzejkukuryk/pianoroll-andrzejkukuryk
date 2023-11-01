import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Thumbnail } from "./thumbnail";
import { arrayOfDivs } from "../originalPart/app";

export function ChallangePart() {
  const [allPianoRolls, setAllPianoRolls] = useState<any[]>([]);

  useEffect(() => setAllPianoRolls(arrayOfDivs), [arrayOfDivs]);
  console.log("allPianoRolls: ", allPianoRolls);

  const createThumbnails = () => {
    return allPianoRolls.map((pianoRoll, index) => (
      <Thumbnail content={pianoRoll} key={index} />
    ));
  };
  return (
    <Container>
      <Row>{createThumbnails()}</Row>
    </Container>
  );
}
