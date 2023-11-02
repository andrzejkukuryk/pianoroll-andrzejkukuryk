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
  const pianoRoll = useRef(null);

  const thumbnailWidth = view === "thumbnails" ? 4 : 9;

  const prepareThumbnail = () => {
    const div = pianoRoll.current;

    if (div) {
      //@ts-ignore
      const svg = div.querySelector("svg");
      svg.setAttribute("height", "150");
      svg.setAttribute("width", "100%");
    }
  };

  useEffect(() => {
    prepareThumbnail();
  }, [content]);

  const findIndex = () => {
    const div = pianoRoll.current;

    if (div) {
      //@ts-ignore
      const txt = div.querySelector("div.description");
      const index = txt.innerHTML.replace(/\D/g, "");
      return index;
    }
  };

  return (
    <Col xs={thumbnailWidth} className={`p-0 mb-5 ms-5 ${styles.thumbnail}`}>
      <div ref={pianoRoll} onClick={() => choosePianoRoll(findIndex())}>
        {content}
      </div>
    </Col>
  );
}
