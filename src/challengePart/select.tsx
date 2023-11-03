import React, { useEffect, useState } from "react";
import styles from "./select.module.css";
import classNames from "classnames";
import { ReactComponent as CloseButton } from "../assets/close.svg";

interface SelectProps {
  show: boolean;
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
  showCloseButton: boolean;
  x1: number;
  x2: number;
  width: number;
}

export function Select({
  show,
  setShowSelect,
  showCloseButton,
  x1,
  x2,
  width,
}: SelectProps) {
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

  const handleButtonClick = () => {
    setShowSelect(false);
  };

  const divClass = classNames({
    [styles.selectArea]: show,
    [styles.hide]: !show || width === 0,
  });

  const buttonClass = classNames({
    [styles.closeButton]: showCloseButton,
    [styles.hide]: !showCloseButton,
  });

  return (
    <div
      className={divClass}
      style={{ left: xl, right: xr, width: selectWidth }}
    >
      <button onClick={handleButtonClick} className={buttonClass}>
        <CloseButton className={styles.icon} />
      </button>
    </div>
  );
}
