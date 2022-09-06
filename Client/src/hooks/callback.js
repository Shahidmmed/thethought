import React, { useEffect, useContext } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import Context from "../utils/context";

const Callback = (props) => {
  const context = useContext(Context);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    console.log("HELLOOOO", params.get("access_token"));

    context.handleAuth();
  }, []);

  return <div>CALLBACK</div>;
};

export default Callback;
