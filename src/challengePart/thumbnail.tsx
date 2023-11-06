import React, { useEffect, useRef } from "react";
import { Col } from "react-bootstrap";
import { usePianoRollContext } from "../data/pianoRollContext";
import styles from "./thumbnail.module.css";

type viewType = "thumbnails" | "mainPianoRoll";

interface ThumbnailProps {
  content: any;
  view: viewType;
}

export function Thumbnail({ content, view }: ThumbnailProps) {
  const { choosePianoRoll } = usePianoRollContext();
  const pianoRoll = useRef<HTMLDivElement>(null);

  const thumbnailWidthXs = view === "thumbnails" ? 5 : 9;
  const thumbnailWidthSm = view === "thumbnails" ? 3 : 9;

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
