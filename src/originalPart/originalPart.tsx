import React, { useEffect } from "react";
import styles from "./originalPart.module.css";
import { Nav } from "./nav";
import { Header } from "./header";
import { LoadButton } from "./loadButton";
import { PianoRollDisplay } from "./app";
import { usePianoRollContext } from "../data/pianoRollContext";

// Returns the React reconstruction of the original part of the application provided by the client.

export function OriginalPart() {
  const { setArrayOfDivs, reset } = usePianoRollContext();

// Launches the application.

  const handleClick = async () => {
    reset();

    try {
      const csvToSVG = new PianoRollDisplay();
      const newArrayOfDivs = await csvToSVG.generateSVGs();
      if (newArrayOfDivs) {
        setArrayOfDivs(newArrayOfDivs);
      } else {
        console.error("generateSVGs() returned falsy.");
      }
    } catch (error) {
      console.error("An error when generating SVG:", error);
    }
  };

  return (
    <div className={styles.originalPartContainer}>
      <Nav />
      <Header />
      <LoadButton ftn={handleClick} />
    </div>
  );
}
