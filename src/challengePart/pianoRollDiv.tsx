import React, { useRef, useEffect } from "react";

interface PianoRollDivProps {
  content: HTMLElement;
}

export function PianoRollDiv({ content }: PianoRollDivProps) {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      //@ts-ignore
      divRef.current.appendChild(content);
    }
    // return () => {
    //   //@ts-ignore
    //   pianoRoll.current.removeChild(content);
    // };
  }, []);

  return <div ref={divRef} />;
}
