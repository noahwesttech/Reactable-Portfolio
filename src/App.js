import React from "react";
import "./index.css";
import Home from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"

import { Route, Routes } from "react-router-dom";
import Resume from "./routes/Resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
