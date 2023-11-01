import React from "react";
import styles from "./header.module.css";

export function Header() {
  return (
    <h1 className={`text-center ${styles.header}`}>
      Welcome to PianoRoll frontend coding challenge!
    </h1>
  );
}
