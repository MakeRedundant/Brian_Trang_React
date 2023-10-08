import { Typewriter } from "react-simple-typewriter";

export const TypewriterComponent = ({ words, loop, typeSpeed, deleteSpeed, delaySpeed }) => {
  return (
    <Typewriter
      words={["Coding", "Driving in peak hour traffic", "Cats", "Binge watching youtube coding videos", "Dogs", "Videogames", "Anime"]}
      loop={true}
      typeSpeed={50}
      deleteSpeed={10}
      delaySpeed={2000}
    />
  );
};