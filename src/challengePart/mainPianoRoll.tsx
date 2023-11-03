import React, { useEffect, useRef, useState } from "react";
import styles from "./mainPianoRoll.module.css";
import { Col } from "react-bootstrap";
import { usePianoRollContext } from "../data/pianoRollContext";
import { Select } from "./select";

export function MainPianoRoll() {
  const { currentPianoRoll } = usePianoRollContext();
  const [showSelect, setShowSelect] = useState(false);
  const [buttonPushed, setButtonPushed] = useState(false);
  const [x1, setX1] = useState(0);
  const [selectWidth, setSelectWidth] = useState(0);
  const pianoRoll = useRef(null);

  const prepareMainRoll = () => {
    const div = pianoRoll.current;

    if (div) {
      //@ts-ignore
      const svg = div.querySelector("svg");
      svg.setAttribute("height", "600");
      svg.setAttribute("width", "90%");
    }
  };

  useEffect(() => {
    prepareMainRoll();
  }, [currentPianoRoll]);

  const clearSelect = () => {
    setSelectWidth(0);
    setX1(0);
    setButtonPushed(false);
  };

  const initSelect = () => {
    setShowSelect(true);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    clearSelect();
    setButtonPushed(true);
    if (pianoRoll.current) {
      //@ts-ignore
      const rect = pianoRoll.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      setX1(x);
    }
    initSelect();
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (buttonPushed) {
      if (pianoRoll.current) {
        //@ts-ignore
        const rect = pianoRoll.current.getBoundingClientRect();
        const xMove = event.clientX - rect.left;
        const newSelectWidth = xMove - x1;
        setSelectWidth(newSelectWidth);
      }
    }
  };

  const handleMouseUp = () => {
    setButtonPushed(false);
  };

  return (
    <Col xs={8} className="p-0">
      <div
        ref={pianoRoll}
        className={styles.posRelative}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={handleMouseUp}
      >
        {currentPianoRoll}
        <Select show={showSelect} x1={x1} width={selectWidth} />
      </div>
    </Col>
  );
}
