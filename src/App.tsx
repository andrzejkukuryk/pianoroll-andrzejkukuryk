import React from "react";
import "./App.css";
import { OriginalPart } from "./originalPart/originalPart";
import { ChallengePart } from "./challengePart/challengePart";

function App() {
  return (
    <div>
      <OriginalPart />
      <ChallengePart />
    </div>
  );
}

export default App;
