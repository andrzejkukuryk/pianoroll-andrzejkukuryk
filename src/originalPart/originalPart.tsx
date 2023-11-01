import React, { useEffect } from "react";
import styles from "./originalPart.module.css";
import { Nav } from "./nav";
import { Header } from "./header";
import { LoadButton } from "./loadButton";
import { PianoRollDisplay } from "./app";

export function OriginalPart() {
  const handleClick = async () => {
    const csvToSVG = new PianoRollDisplay();
    await csvToSVG.generateSVGs();
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className={styles.originalPartContainer}>
      <Nav />
      <Header />
      <LoadButton ftn={handleClick} />
    </div>
  );
}
