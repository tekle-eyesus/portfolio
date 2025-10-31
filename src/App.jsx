import React from "react";
import Header from "./components/Header";
import { useTheme } from "./Hooks/useTheme";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='App' data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
