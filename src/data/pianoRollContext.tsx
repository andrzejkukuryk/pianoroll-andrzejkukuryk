import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";

import { PianoRollDiv } from "../challengePart/pianoRollDiv";

const initialPianoRollContext = {
  allPianoRolls: [],
  pianoRollsThumbnails: [],
  currentPianoRoll: "",
  refresh: () => {},
  choosePianoRoll: () => {},
} as unknown as ValueProp;

export const PianoRollContext = createContext<ValueProp>(
  initialPianoRollContext
);

interface ValueProp {
  allPianoRolls: any[];
  pianoRollsThumbnails: any[];
  currentPianoRoll: any;
  refresh: () => void;
  choosePianoRoll: (index: number) => void;
  setArrayOfDivs: React.Dispatch<React.SetStateAction<HTMLDivElement[]>>;
}

interface PianoRollProviderProps {
  children?: ReactNode;
}

export const usePianoRollContext = () => {
  return useContext(PianoRollContext);
};

export const PianoRollProvider: FC<PianoRollProviderProps> = ({ children }) => {
  const [arrayOfDivs, setArrayOfDivs] = useState<HTMLDivElement[]>([]);
  const [allPianoRolls, setAllPianoRolls] = useState<JSX.Element[]>([]);
  const [pianoRollsThumbnails, setPianoRollsThumbnails] = useState<
    JSX.Element[]
  >([]);
  const [currentPianoRoll, setCurrentPianoRoll] = useState<JSX.Element>();

  const refresh = () => {
    prepareJSXs();
  };

  const prepareJSXs = () => {
    const preparedJSXs = arrayOfDivs.map((div, index) => (
      <PianoRollDiv content={div} key={index} />
    ));
    setAllPianoRolls(preparedJSXs);
    setPianoRollsThumbnails(preparedJSXs);
  };

  useEffect(() => prepareJSXs(), [arrayOfDivs]);

  const choosePianoRoll = (index: number) => {
    const temporary = [...allPianoRolls];
    const newCurrentPianoRoll = temporary.splice(index, 1);
    setPianoRollsThumbnails(temporary);
    setCurrentPianoRoll(newCurrentPianoRoll[0]);
  };

  const value: ValueProp = {
    allPianoRolls,
    pianoRollsThumbnails,
    currentPianoRoll,
    refresh,
    choosePianoRoll,
    setArrayOfDivs,
  };

  console.log(arrayOfDivs);

  return (
    <PianoRollContext.Provider value={value}>
      {children}
    </PianoRollContext.Provider>
  );
};
