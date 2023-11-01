import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";

const initialPianoRollContext = {
  prevPath: "",
  listPage: 1,
  updateStatesForNavContext: () => {},
} as unknown as ValueProp;

export const PianoRollContext = createContext<ValueProp>(
  initialPianoRollContext
);

interface ValueProp {
  allPianoRolls: any[];
  pianoRollsThumbnails: any[];
  prevPath: string;

  listPage: number;
  updateStatesForNavContext: (path: string, page: number) => void;
}

interface PianoRollProviderProps {
  children?: ReactNode;
}

export const usePianoRollContext = () => {
  return useContext(PianoRollContext);
};

export const PianoRollProvider: FC<PianoRollProviderProps> = ({ children }) => {
  const [prevPath, setPrevPath] = useState("");
  const [listPage, setListPage] = useState(1);
  const [allPianoRolls, setAllPianoRolls] = useState<any[]>([]);
  const [pianoRollsThumbnails, setPianoRollsThumbnails] = useState<any[]>([]);
  const [currentPianoRoll, setCurrentPianoRoll] = useState<any>();

  const updateStatesForNavContext = (path: string, page: number) => {
    setPrevPath(path);
    setListPage(page);
  };

  const value: ValueProp = {
    allPianoRolls,
    pianoRollsThumbnails,
    prevPath,
    listPage,
    updateStatesForNavContext,
  };

  return (
    <PianoRollContext.Provider value={value}>
      {children}
    </PianoRollContext.Provider>
  );
};
