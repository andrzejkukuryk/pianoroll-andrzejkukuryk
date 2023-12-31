import React from "react";
import { ReactComponent as Piano } from "../assets/white.svg";
import styles from "./logo.module.css";

// Returns app logo.

export function Logo() {
  return <Piano className={styles.pianoSvg} />;
}
