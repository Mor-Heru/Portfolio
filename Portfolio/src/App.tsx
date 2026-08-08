import { useState } from "react";

import Header from "./components/Header";
import Grid from "./components/Projects/Grid";
import Media from "./components/Media/Media"
import About from "./components/AboutUS/About";
import CV from "./components/CV/CV";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("projects");

  return (
    <>
      <Header onNavigate={setActivePage} activePage={activePage} />
      {activePage === "projects" && <Grid />}
      {activePage === "media" && <Media />}
      {activePage === "about us" && <About />}
      {activePage === "cv" && <CV />}
    </>
  );
}

export default App;
