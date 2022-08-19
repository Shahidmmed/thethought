import React, { useContext } from "react";
import Context from "../utils/context";

const SignUp = (props) => {
  const context = useContext(Context);
  return (
    <div className="FlexRowMain">
      <div>
        <h1>Signup and Create an Account</h1>
        <button
          className="uk-button uk-button-default"
          onClick={() => context.authObj.login()}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignUp;
