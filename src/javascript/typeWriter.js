// typewriterLogic.js
import { useTypewriter } from "react-simple-typewriter";

export const useTypewriterLogic = () => {
  const typeText = useTypewriter({
    words: [
      "Javascript.",
      "HTML/CSS.",
      "Driving in peak hour traffic",
      "Binge watching youtube tutorials"
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000
  });

  return { typeText };
};
