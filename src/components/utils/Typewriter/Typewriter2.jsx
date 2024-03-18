import { Typewriter } from "react-simple-typewriter";

export const TypewriterComponent2 = ({ words, loop, typeSpeed, deleteSpeed, delaySpeed }) => {
  return (
    <Typewriter
      words={["Web Development", "Javascript", "UI/UX", "PHP", "CSS", "React", "Vue", "Fancy Websites", "Typescript", "HTML", "SQL", "MongoDB", "Tea", "Bcrypt", "JSX" ,"GIT", "BASH", "Tailwind CSS", "MUI", "EmailJS"]}
      loop={true}
      typeSpeed={50}
      deleteSpeed={10}
      delaySpeed={2000}
    />
  );
};