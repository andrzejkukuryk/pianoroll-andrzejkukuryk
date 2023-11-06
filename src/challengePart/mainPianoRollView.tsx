import React from "react";
import { usePianoRollContext } from "../data/pianoRollContext";
import styles from "./mainPianoRollView.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { MainPianoRoll } from "./mainPianoRoll";
import { Thumbnail } from "./thumbnail";

// Returns the main Piano Roll view and scrollable thumbnails on the right side. Bootstrap is used to construct the grid.

export function MainPianoRollView() {
  const { pianoRollsThumbnails } = usePianoRollContext();
  const createThumbnails = () => {
    return pianoRollsThumbnails.map((pianoRoll, index) => (
      <Thumbnail content={pianoRoll} view="mainPianoRoll" key={index} />
    ));
  };
  return (
    <Row>
      <Container fluid className="p-0">
        <Row>
          <MainPianoRoll />
          <Col className="d-none d-lg-block"></Col>
          <Col xs={5} md={4} lg={3} className="p-0">
            <Container fluid className={`p-0 mt-4 ${styles.scrollable}`}>
              {createThumbnails()}
            </Container>
          </Col>
        </Row>
      </Container>
    </Row>
  );
}
