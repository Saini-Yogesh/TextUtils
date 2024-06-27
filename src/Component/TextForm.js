// react funcation based component
import React, { useState } from "react";

export default function TextForm(props) {
  let [text, setText] = useState("");
  const handelUpCLick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upercases", "success");
  };
  const handelLoCLick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowcases", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to Clipboard", "success");
  };
  const clear = () => {
    setText("");
    props.showAlert("Text Cleard", "success");
  };
  const removeExtraSpaces = (str) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const wordCount = (text) => {
    const wordsArray = text.split(/\s+/).filter((word) => word.length > 0);
    return wordsArray.length;
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter you text...."
            style={{
              backgroundColor: props.mode === "dark" ? "#335669" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handelUpCLick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handelLoCLick}
        >
          Convert to Lowecase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={speak}
        >
          Speak
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={clear}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={removeExtraSpaces}
        >
          Remove extra space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1> Your text Summery</h1>
        <p>
          {wordCount(text)} words and {text.length} character
        </p>
        <h2> Preview</h2>
        <p>{text === "" ? "Enter your text to Preview..." : text}</p>
      </div>
    </>
  );
}
