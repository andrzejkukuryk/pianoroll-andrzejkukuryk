import React, { useEffect } from "react";
import styles from "./originalPart.module.css";
import { Nav } from "./nav";
import { Header } from "./header";
import { LoadButton } from "./loadButton";
import { PianoRollDisplay } from "./app";
import { usePianoRollContext } from "../data/pianoRollContext";

export function OriginalPart() {
  const { setArrayOfDivs, reset } = usePianoRollContext();

  const handleClick = async () => {
    reset();
    const csvToSVG = new PianoRollDisplay();
    await csvToSVG.generateSVGs();
    if (await csvToSVG.generateSVGs()) {
      const newArrayOfDivs = await csvToSVG.generateSVGs();
      if (newArrayOfDivs !== undefined) {
        setArrayOfDivs(newArrayOfDivs);
      }
    }
  };

  return (
    <div className={styles.originalPartContainer}>
      <Nav />
      <Header />
      <LoadButton ftn={handleClick} />
      <div id="pianoRollContainer" />
    </div>
  );
}
