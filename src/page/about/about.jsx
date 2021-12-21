import React from "react";
import { useHistory } from "react-router-dom";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const textState = atom({
  key: "textState",
  default: "",
})


const TextInput = (props) => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <input type="text" value={text} onChange={onChange}/>
      <br />
      Echo: {text}
    </>
  )
}

const charCountState = selector({
  key: "charCountState",
  get: ({get}) => {
    const text = get(textState)
    return text.length
  }
})

const CharacterCount = (props) => {
  const count = useRecoilValue(charCountState)
  return (
    <>
      Character Count: {count}
    </>
  )
}



export default (props) => {
  const history = useHistory();
  return (
    <>
      <h1>About</h1>
      <CharacterCount></CharacterCount>
      <TextInput></TextInput>
      {/* <button
        onClick={() => {
          history.push("/home");
        }}
      >
        to go home
      </button> */}
    </>
  );
};
