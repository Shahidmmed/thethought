import React from "react";
import { useParams } from "react-router-dom";

const Callback = (props) => (
  <div>
    {console.log("props", props)}
    Callback
  </div>
);

export default Callback;
