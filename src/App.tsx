import React, { useEffect } from "react";
import "./App.css";
import { PianoRollDisplay, arrayOfDivs } from "../src/originalPart/app";
import { OriginalPart } from "./originalPart/originalPart";
import { ChallengePart } from "./challengePart/challengePart";

function App() {
  // useEffect(() => console.log(arrayOfDivs), [arrayOfDivs]);
  return (
    <div>
      <OriginalPart />
      <ChallengePart />
    </div>
  );
}

export default App;
