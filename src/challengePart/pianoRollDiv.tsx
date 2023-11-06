import React, { useRef, useEffect } from "react";

// Defines the props accepted by the component.

interface PianoRollDivProps {
  content: HTMLDivElement;
}

// "Embeds the cardDiv (referred to as 'content' here) provided by the client in JSX."

export function PianoRollDiv({ content }: PianoRollDivProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.appendChild(content);
    }
  }, []);

  return <div ref={divRef} />;
}
