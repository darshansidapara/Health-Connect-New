import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Calories from "./components/Calories"
import Diet from "./components/Diet"
import Breathing from "./components/Breathing";
import "./style.css";


function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/script.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/calories" element={<Calories />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/breathing-page" element={<Breathing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
