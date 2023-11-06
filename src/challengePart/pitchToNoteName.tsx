// Converts the MIDI pitch value to the letter name of the note.

export function pitchToNoteName(pitch: number) {
  const noteNames = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  const octave = Math.floor(pitch / 12);

  const noteIndex = pitch % 12;

  const noteName = noteNames[noteIndex];

  return noteName + octave;
}
