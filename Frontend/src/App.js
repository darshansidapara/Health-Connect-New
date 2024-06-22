import Main from "./components/Main";
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
    </div>
  );
}

export default App;
