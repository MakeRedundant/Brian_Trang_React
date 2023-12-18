import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Navbar2 from "./components/NavBar/NavBar2";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Email from "./components/Contact/Email";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Email />
      <Footer />
    </>
  );
};

export default App;

//so quick summary for eslint
//npm install eslint
//npm init @eslint/config answer some questions
//npx  eslint file.js
//npx eslint file.js --fix (to fix the things)
