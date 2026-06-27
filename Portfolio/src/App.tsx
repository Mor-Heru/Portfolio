import { useState } from "react";

import Header from "./components/Header";
import Grid from "./components/Grid";
import Media from "./components/Media/Media"

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("projects");

  return (
    <>
      <Header onNavigate={setActivePage} />
      {activePage === "projects" && <Grid />}
      {activePage === "media" && <Media />}
    </>
  );
}

export default App;
