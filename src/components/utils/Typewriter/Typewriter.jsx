import { Typewriter } from "react-simple-typewriter";

export const TypewriterComponent = ({ words, loop, typeSpeed, deleteSpeed, delaySpeed }) => {
  return (
    <Typewriter
      words={["Coding 🖥️", "Peak hour traffic 🚗", "Cats 🐱", "Construction noise 🔨", "Inflation 💸", "Tea 🍵", "Sleeping 😴", "Archery 🏹", "Taxes 💰", "Shrinkflation 📉", "Youtube coding videos 🎥", "Dogs 🐶", "Videogames 🎮", "Anime 🎌", "Visual Novels 📖"]}
      loop={true}
      typeSpeed={50}
      deleteSpeed={10}
      delaySpeed={2000}
    />
  );
};