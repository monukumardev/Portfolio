import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import About from "./components/About";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <main>
      {/* Gradient Image - cover viewport */}
      {/* <img
        className="fixed inset-0 w-full h-full object-cover opacity-60 -z-10 pointer-events-none"
        src="/gradient.png"
        alt="Gradient Image"
      /> */}

      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>
      
      <Header />
      <Hero />
      <Divider/>
      <About/>
      <Divider/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
};

export default App;
