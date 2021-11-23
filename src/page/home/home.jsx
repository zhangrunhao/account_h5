import React, { useState } from "react";

export default (props) => {
  const [name, setName] = useState("zhangrh");
  const inputChange = function (value) {
    console.log(value)
    setName(value)
  }
  return (
    <>
      <h1>Home</h1>
      <Child type={name} inputChange={inputChange}></Child>
    </>
  );
};

const Child = (props) => {
  const inputChange = function (event) {
    props.inputChange(event.target.value)
  }
  return (
    <div>
      <p>Child: {props.type}</p>
      <input type="text" onChange={inputChange} value={props.type}/>
    </div>
  );
};
