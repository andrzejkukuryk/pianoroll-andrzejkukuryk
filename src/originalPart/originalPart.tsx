import React from "react";
import styles from "./originalPart.module.css";
import { Nav } from "./nav";
import { Header } from "./header";

export function OriginalPart() {
  return (
    <div className={styles.originalPartContainer}>
      <Nav />
      <Header />
    </div>
  );
}
