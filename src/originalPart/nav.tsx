import React from "react";
import styles from "./nav.module.css";
import { Logo } from "./logo";

// Returns app navigation.

export function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo />
    </nav>
  );
}
