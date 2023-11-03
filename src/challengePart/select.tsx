import React, { useEffect } from "react";
import styles from "./select.module.css";
import classNames from "classnames";

interface SelectProps {
  show: boolean;
  x1: number;
  width: number;
}

export function Select({ show, x1, width }: SelectProps) {
  const divClass = classNames({
    [styles.selectArea]: show,
    [styles.hide]: !show || width === 0,
  });

  return <div className={divClass} style={{ left: x1, width: width }}></div>;
}
