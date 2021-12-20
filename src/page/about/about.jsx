import React from "react";
import { useHistory } from "react-router-dom";

export default (props) => {
  const history = useHistory();
  return (
    <>
      <h1>About</h1>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        to go home
      </button>
    </>
  );
};
