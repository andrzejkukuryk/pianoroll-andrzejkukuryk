import React, { useEffect, useRef } from "react";
import { Col } from "react-bootstrap";
import { usePianoRollContext } from "../data/pianoRollContext";
import styles from "./thumbnail.module.css";

type viewType = "thumbnails" | "mainPianoRoll";

// Defines the props accepted by the component.

interface ThumbnailProps {
  content: any;
  view: viewType;
}

//  Returns the view of a single thumbnail. It utilizes Bootstrap to create a grid.

export function Thumbnail({ content, view }: ThumbnailProps) {
  const { choosePianoRoll } = usePianoRollContext();
  const pianoRoll = useRef<HTMLDivElement>(null);

  const thumbnailWidthXs = view === "thumbnails" ? 5 : 9;
  const thumbnailWidthSm = view === "thumbnails" ? 3 : 9;

  // Searches for the Piano Roll number and returns it. It is then used to select the main Piano Roll among the thumbnails.

  const findIndex = () => {
    const div = pianoRoll.current;

    if (div) {
      const txt = div.querySelector("div.description");
      if (txt) {
        const index = txt.innerHTML.replace(/\D/g, "");
        return Number(index);
      }
    }
    return 0;
  };

  return (
    <Col
      xs={thumbnailWidthXs}
      sm={thumbnailWidthSm}
      className={`p-0 mb-5 ms-3 ms-sm-4 ms-md-5 ${styles.thumbnail}`}
    >
      <div ref={pianoRoll} onClick={() => choosePianoRoll(findIndex())}>
        <div className={styles.contentDiv}>{content}</div>
      </div>
    </Col>
  );
}
