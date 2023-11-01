import React, { useEffect, useRef } from "react";
import { Col } from "react-bootstrap";
import { usePianoRollContext } from "../data/pianoRollContext";

interface ThumbnailProps {
  content: any;
}

export function Thumbnail({ content }: ThumbnailProps) {
  const { choosePianoRoll } = usePianoRollContext();
  const pianoRoll = useRef(null);

  useEffect(() => {
    if (pianoRoll.current) {
      //@ts-ignore
      pianoRoll.current.appendChild(content);
    }
    // return () => {
    //   //@ts-ignore
    //   pianoRoll.current.removeChild(content);
    // };
  }, []);

  const changeHeight = () => {
    const div = pianoRoll.current;

    if (div) {
      //@ts-ignore
      const svg = div.querySelector("svg");
      svg.setAttribute("height", "200");
    }
  };

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
    <Col xs={4}>
      <button onClick={changeHeight}>change</button>
      <div ref={pianoRoll} onClick={() => choosePianoRoll(findIndex())} />
    </Col>
  );
}
