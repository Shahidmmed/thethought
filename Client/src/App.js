import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ContextState from "./context_state_config";

function App() {
  useEffect(() => {}, []);

  return (
    <div>
      Home
      <ContextState />
    </div>
  );
}

export default App;
