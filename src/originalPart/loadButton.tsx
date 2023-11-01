import React from "react";
import styles from "./loadButton.module.css";

interface LoadButtonProps {
  ftn: () => void;
}

export function LoadButton({ ftn }: LoadButtonProps) {

  return (
    <div className={styles.buttonContainer}>
      <button onClick={ftn} className={styles.loadButton}>
        Load Piano Rolls!
      </button>
    </div>
  );
}
