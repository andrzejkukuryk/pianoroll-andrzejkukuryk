import React, { useRef, useEffect } from "react";

interface PianoRollDivProps {
  content: any;
}

export function PianoRollDiv({ content }: PianoRollDivProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.appendChild(content);
    }
  }, []);

  return <div ref={divRef} />;
}
