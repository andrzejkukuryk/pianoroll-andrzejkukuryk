import React, { useEffect, useState } from "react";
import styles from "./select.module.css";
import classNames from "classnames";

interface SelectProps {
  show: boolean;
  x1: number;
  x2: number;
  width: number;
}

export function Select({ show, x1, x2, width }: SelectProps) {
  const [xl, setXl] = useState<number | undefined>(undefined);
  const [xr, setXr] = useState<number | undefined>(0);
  const [selectWidth, setSelectWidth] = useState(0);

  useEffect(() => {
    setXl(x1);
  }, [x1]);

  useEffect(() => checkWidth(), [width]);

  const checkWidth = () => {
    if (width < 0) {
      setXl(undefined);
      setXr(x2);
      setSelectWidth(-width);
    } else {
      setXl(x1);
      setXr(undefined);
      setSelectWidth(width);
    }
  };

  const divClass = classNames({
    [styles.selectArea]: show,
    [styles.hide]: !show || width === 0,
  });

  return (
    <div
      className={divClass}
      style={{ left: xl, right: xr, width: selectWidth }}
    ></div>
  );
}
