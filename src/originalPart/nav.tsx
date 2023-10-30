import React from "react";
import styles from "./nav.module.css";
import { Logo } from "./logo";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo />
    </nav>
  );
}
