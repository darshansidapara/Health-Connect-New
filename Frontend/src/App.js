import Main from "./components/Main";
import Calories from "./components/Calories"
import Diet from "./components/Diet"
import "./style.css";

import React, { useEffect } from "react";

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
    <div className="App">
      <Main />
      <Calories/>
      <Diet/>
    </div>
  );
}

export default App;
