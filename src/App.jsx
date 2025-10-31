import React from "react";
import Header from "./components/Header";
import { useTheme } from "./Hooks/useTheme";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='App' data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
