import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";

import { arrayOfDivs } from "../originalPart/app";

const initialPianoRollContext = {
  allPianoRolls: arrayOfDivs,
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
}

interface PianoRollProviderProps {
  children?: ReactNode;
}

export const usePianoRollContext = () => {
  return useContext(PianoRollContext);
};

export const PianoRollProvider: FC<PianoRollProviderProps> = ({ children }) => {
  const [allPianoRolls, setAllPianoRolls] = useState<any[]>([]);
  const [pianoRollsThumbnails, setPianoRollsThumbnails] = useState<any[]>([]);
  const [currentPianoRoll, setCurrentPianoRoll] = useState<any>();

  const refresh = () => {
    setAllPianoRolls(arrayOfDivs);
    setPianoRollsThumbnails(arrayOfDivs);
  };

  const choosePianoRoll = (index: number) => {
    const temporary = [...allPianoRolls];
    const newCurrentPianoRoll = temporary.splice(index, 1);
    setPianoRollsThumbnails(temporary);
    setCurrentPianoRoll(newCurrentPianoRoll);
    console.log(temporary);
  };

  const value: ValueProp = {
    allPianoRolls,
    pianoRollsThumbnails,
    currentPianoRoll,
    refresh,
    choosePianoRoll,
  };

  useEffect(
    () => console.log("currentPianoRoll: ", currentPianoRoll),
    [currentPianoRoll]
  );

  useEffect(() =>
    console.log("pianoRollsThumbnails: ", pianoRollsThumbnails, [
      pianoRollsThumbnails,
    ])
  );

  return (
    <PianoRollContext.Provider value={value}>
      {children}
    </PianoRollContext.Provider>
  );
};
