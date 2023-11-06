import React from "react";
import styles from "./loadButton.module.css";

// Defines the props accepted by the component.

interface LoadButtonProps {
  ftn: () => void;
}

// Returns the button that launches the application.

export function LoadButton({ ftn }: LoadButtonProps) {

  return (
    <div className={styles.buttonContainer}>
      <button onClick={ftn} className={styles.loadButton}>
        Load Piano Rolls!
      </button>
    </div>
  );
}
