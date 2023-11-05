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

  const thumbnailWidth = view === "thumbnails" ? 3 : 9;

  const prepareThumbnail = () => {
    const div = pianoRoll.current;

    if (div) {
      const svg = div.querySelector<SVGSVGElement>("svg");
      if (svg) {
        svg.setAttribute("height", "120");
        svg.setAttribute("width", "100%");
      }
    }
  };

  useEffect(() => {
    prepareThumbnail();
  }, [content]);

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
    <Col xs={thumbnailWidth} className={`p-0 mb-5 ms-5 ${styles.thumbnail}`}>
      <div ref={pianoRoll} onClick={() => choosePianoRoll(findIndex())}>
        {content}
      </div>
    </Col>
  );
}
