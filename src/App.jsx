import React from "react";
import Header from "./components/Header";
import { useTheme } from "./Hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='App' data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
