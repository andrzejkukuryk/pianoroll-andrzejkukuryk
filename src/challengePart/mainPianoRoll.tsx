import React, { useEffect, useRef, useState } from "react";
import styles from "./mainPianoRoll.module.css";
import { Col } from "react-bootstrap";
import { usePianoRollContext } from "../data/pianoRollContext";
import { Select } from "./select";

export function MainPianoRoll() {
  const { currentPianoRoll } = usePianoRollContext();
  const [showSelect, setShowSelect] = useState(false);
  const [showCloseSelect, setShowCloseSelect] = useState(false);
  const [buttonPushed, setButtonPushed] = useState(false);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [selectWidth, setSelectWidth] = useState(0);
  const pianoRoll = useRef<HTMLDivElement>(null);

  ////// SVG section //////
  const prepareMainRoll = () => {
    const div = pianoRoll.current;

    if (div) {
      const svg = div.querySelector<SVGElement>("svg");
      if (svg) {
        svg.setAttribute("height", "600");
        svg.setAttribute("width", "100%");
      }
    }
  };

  useEffect(() => {
    prepareMainRoll();
    findNoteRectangles();
    clearSelect();
  }, [currentPianoRoll]);

  const findNoteRectangles = () => {
    const div = pianoRoll.current;
    if (div) {
      const rects = div.querySelectorAll(".note-rectangle");
      const newNoteRectangles = Array.from(rects);
      console.log(newNoteRectangles[0].getAttribute("width"));
    }
  };

  ////// Select section /////////

  const clearSelect = () => {
    setSelectWidth(0);
    setX1(0);
    setButtonPushed(false);
    setShowCloseSelect(false);
  };

  const initSelect = () => {
    setShowSelect(true);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    clearSelect();
    setButtonPushed(true);
    if (pianoRoll.current) {
      const rect = pianoRoll.current.getBoundingClientRect();
      const xl = event.clientX - rect.left;
      const xr = rect.right - event.clientX;
      setX1(xl);
      setX2(xr);
    }
    initSelect();
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (buttonPushed) {
      if (pianoRoll.current) {
        const rect = pianoRoll.current.getBoundingClientRect();
        const xMove = event.clientX - rect.left;
        const newSelectWidth = xMove - x1;
        setSelectWidth(newSelectWidth);
      }
    }
  };

  const handleMouseUp = () => {
    setButtonPushed(false);
    setShowCloseSelect(true);
  };

  return (
    <Col xs={8} className="p-0">
      <div
        ref={pianoRoll}
        className={styles.posRelative}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {currentPianoRoll}
        <Select
          show={showSelect}
          setShowSelect={setShowSelect}
          showCloseButton={showCloseSelect}
          x1={x1}
          x2={x2}
          width={selectWidth}
        />
      </div>
    </Col>
  );
}
