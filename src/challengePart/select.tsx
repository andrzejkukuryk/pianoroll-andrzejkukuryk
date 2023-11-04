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
  svgWidth: number | undefined;
}

export function Select({
  show,
  setShowSelect,
  showCloseButton,
  x1,
  x2,
  width,
  svgWidth,
}: SelectProps) {
  const [xl, setXl] = useState<number | undefined>(undefined);
  const [xr, setXr] = useState<number | undefined>(0);
  const [selectWidth, setSelectWidth] = useState(0);
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);
  const [selectionPercentStart, setSeletionPercentStart] = useState(0);
  const [selectionPercentEnd, setSeletionPercentEnd] = useState(0);

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

  const selectResult = () => {
    if (width !== 0) {
      const begin = x1;
      const end = begin + width;
      if (begin < end) {
        setSelectionStart(begin);
        setSelectionEnd(end);
      } else {
        setSelectionStart(end);
        setSelectionEnd(begin);
      }
    }
  };

  useEffect(() => {
    selectResult();
    countSelectionPercents();
  }, [showCloseButton === true]);

  const countSelectionPercents = () => {
    if (svgWidth) {
      const newPercentStart = selectionStart / svgWidth;
      const newPercentEnd = selectionEnd / svgWidth;

      setSeletionPercentStart(newPercentStart);
      setSeletionPercentEnd(newPercentEnd);
    }
  };

  useEffect(() => {
    if (selectionEnd !== 0) {
      console.log(
        "Selection begins at:",
        selectionStart,
        "and ends at:",
        selectionEnd
      );
      console.log(
        "selectionPercentStart: ",
        selectionPercentStart,
        "selectionPercentEnd: ",
        selectionPercentEnd
      );
    }
  }, [selectionEnd]);

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
