import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((res) => setState(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      Home
      <p>{state}</p>
    </div>
  );
}

export default App;
