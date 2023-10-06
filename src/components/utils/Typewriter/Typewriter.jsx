import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export const TypewriterComponent = ({ words, loop, typeSpeed, deleteSpeed, delaySpeed }) => {
  return (
    <Typewriter
      words={["Coding", "Writing", "Building things"]}
      loop={true}
      typeSpeed={50}
      deleteSpeed={10}
      delaySpeed={2000}
    />
  );
};