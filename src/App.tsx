import React, { useEffect } from "react";
import "./App.css";
import { PianoRollDisplay, arrayOfDivs } from "../src/originalPart/app";
import { OriginalPart } from "./originalPart/originalPart";
import { ChallangePart } from "./challangePart/challangePart";

function App() {
  useEffect(() => console.log(arrayOfDivs), [arrayOfDivs]);
  return (
    <div>
      <OriginalPart />
      <ChallangePart />
    </div>
  );
}

export default App;
