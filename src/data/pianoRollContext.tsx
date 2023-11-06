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
  reset: () => {},
  choosePianoRoll: () => {},
  setArrayOfDivs: () => {},
} as unknown as ValueProp;

export const PianoRollContext = createContext<ValueProp>(
  initialPianoRollContext
);

// Defines the data types provided to the application by usePianoRollContext.

interface ValueProp {
  allPianoRolls: any[];
  pianoRollsThumbnails: any[];
  currentPianoRoll: any;
  choosePianoRoll: (index: number) => void;
  setArrayOfDivs: React.Dispatch<React.SetStateAction<HTMLDivElement[]>>;
  reset: () => void;
}

interface PianoRollProviderProps {
  children?: ReactNode;
}

export const usePianoRollContext = () => {
  return useContext(PianoRollContext);
};

// Creates a data provider within the entire application.

export const PianoRollProvider: FC<PianoRollProviderProps> = ({ children }) => {
  const [arrayOfDivs, setArrayOfDivs] = useState<HTMLDivElement[]>([]);
  const [allPianoRolls, setAllPianoRolls] = useState<JSX.Element[]>([]);
  const [pianoRollsThumbnails, setPianoRollsThumbnails] = useState<
    JSX.Element[]
  >([]);
  const [currentPianoRoll, setCurrentPianoRoll] = useState<JSX.Element>();

// Prepares all the cardDivs in the form of JSX and sets them in the component's states.

  const prepareJSXs = () => {
    const preparedJSXs = arrayOfDivs.map((div, index) => (
      <PianoRollDiv content={div} key={index} />
    ));
    setAllPianoRolls(preparedJSXs);
    setPianoRollsThumbnails(preparedJSXs);
  };

  useEffect(() => prepareJSXs(), [arrayOfDivs]);

  // Selects the main Piano Roll from among the thumbnails and sets the component's states accordingly.

  const choosePianoRoll = (index: number) => {
    const temporary = [...allPianoRolls];
    const newCurrentPianoRoll = temporary.splice(index, 1);
    setPianoRollsThumbnails(temporary);
    setCurrentPianoRoll(newCurrentPianoRoll[0]);
  };

// Resets the application to its default state.

  const reset = () => {
    setArrayOfDivs([]);
    setAllPianoRolls([]);
    setCurrentPianoRoll(undefined);
    setPianoRollsThumbnails([]);
  };

  const value: ValueProp = {
    allPianoRolls,
    pianoRollsThumbnails,
    currentPianoRoll,
    choosePianoRoll,
    setArrayOfDivs,
    reset,
  };

  return (
    <PianoRollContext.Provider value={value}>
      {children}
    </PianoRollContext.Provider>
  );
};
