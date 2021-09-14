import logo from "./logo.svg";
import "./App.css";
import Grid from "./components/Grid";
import { useState, useEffect } from "react";

function App() {
  const [current, setCurrent] = useState(null);

  return (
    <div className={current ? "AppActive" : "App"}>
      <div className="wall">
        <Grid current={current} setCurrent={setCurrent} />
      </div>
    </div>
  );
}

export default App;
