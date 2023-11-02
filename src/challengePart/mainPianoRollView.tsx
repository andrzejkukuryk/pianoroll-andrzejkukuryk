import React from "react";
import { usePianoRollContext } from "../data/pianoRollContext";
import styles from "./mainPianoRollView.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { MainPianoRoll } from "./mainPianoRoll";
import { Thumbnail } from "./thumbnail";

export function MainPianoRollView() {
  const { pianoRollsThumbnails } = usePianoRollContext();
  const createThumbnails = () => {
    return pianoRollsThumbnails.map((pianoRoll, index) => (
      <Thumbnail content={pianoRoll} view="mainPianoRoll" key={index} />
    ));
  };
  return (
    <Row>
      <Container className="p-0">
        <Row>
          <MainPianoRoll />
          <Col xs={4} className="p-0">
            <Container className={`p-0 mt-4 ${styles.scrollable}`}>
              {createThumbnails()}
            </Container>
          </Col>
        </Row>
      </Container>
    </Row>
  );
}
