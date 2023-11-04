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
  noteRectangles:
    | {
        x: number;
        width: number;
      }[]
    | undefined;
}

export function Select({
  show,
  setShowSelect,
  showCloseButton,
  x1,
  x2,
  width,
  svgWidth,
  noteRectangles,
}: SelectProps) {
  const [xl, setXl] = useState<number | undefined>(undefined);
  const [xr, setXr] = useState<number | undefined>(0);
  const [selectWidth, setSelectWidth] = useState(0);
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);
  const [selectionPercentStart, setSeletionPercentStart] = useState(0);
  const [selectionPercentEnd, setSeletionPercentEnd] = useState(0);
  const [numberOfSelectedNotes, setNumberOfSelectedNotes] = useState(0);

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
    if (width !== 0 && svgWidth) {
      const begin = x1;
      const beginPerc = begin / svgWidth;
      const end = begin + width;
      const endPerc = end / svgWidth;
      if (begin < end) {
        setSelectionStart(begin);
        setSelectionEnd(end);
        setSeletionPercentStart(beginPerc);
        setSeletionPercentEnd(endPerc);
      } else {
        setSelectionStart(end);
        setSelectionEnd(begin);
        setSeletionPercentStart(endPerc);
        setSeletionPercentEnd(beginPerc);
      }
    }
  };

  useEffect(() => {
    selectResult();
  }, [showCloseButton === true]);

  useEffect(() => {
    if (selectionEnd !== 0) {
      countSelectedNotes();
      console.log(
        `Selection starts at ${selectionPercentStart} ends at ${selectionPercentEnd} and selects ${countSelectedNotes()} notes.`
      );
    }
  }, [selectionEnd]);

  const countSelectedNotes = () => {
    if (noteRectangles) {
      const numberOfNotes = noteRectangles.filter(
        (rect) =>
          (rect.x > selectionPercentStart && rect.x < selectionPercentEnd) ||
          (rect.x + rect.width > selectionPercentStart &&
            rect.x + rect.width < selectionPercentEnd) ||
          (rect.x < selectionPercentStart &&
            rect.x + rect.width > selectionPercentEnd)
      ).length;
      setNumberOfSelectedNotes(numberOfNotes);
      return numberOfNotes;
    }
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
