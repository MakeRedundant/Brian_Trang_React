// typewriter Logic.js

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const words = [
  "Javascript.",
  "HTML/CSS.",
  "Driving in peak hour traffic",
  "Binge watching youtube tutorials"
];

export default function MyTypewriter() {
  return (
    <Typewriter
      words={words}
      loop={true}
      typeSpeed={20}
      deleteSpeed={10}
      delaySpeed={2000}
    />
  );
}
