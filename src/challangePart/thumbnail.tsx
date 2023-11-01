import React, { useEffect, useRef } from "react";
import { Col } from "react-bootstrap";
import { arrayOfDivs } from "../originalPart/app";

interface ThumbnailProps {
  content: any;
}

export function Thumbnail({ content }: ThumbnailProps) {
  const pianoRoll = useRef(null);

  useEffect(() => {
    if (pianoRoll.current) {
      //@ts-ignore
      pianoRoll.current.appendChild(content);
    }
    return () => {
      //@ts-ignore
      pianoRoll.current.removeChild(content);
    };
  }, []);
  return (
    <Col xs={4}>
      <div ref={pianoRoll} />
    </Col>
  );
}
