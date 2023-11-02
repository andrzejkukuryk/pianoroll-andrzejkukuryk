import React from "react";
import { usePianoRollContext } from "../data/pianoRollContext";
import { Row } from "react-bootstrap";
import { Thumbnail } from "./thumbnail";

export function ThumbnailsView() {
  const { pianoRollsThumbnails } = usePianoRollContext();
  const createThumbnails = () => {
    return pianoRollsThumbnails.map((pianoRoll, index) => (
      <Thumbnail content={pianoRoll} view="thumbnails" key={index} />
    ));
  };
  return <Row>{createThumbnails()}</Row>;
}
