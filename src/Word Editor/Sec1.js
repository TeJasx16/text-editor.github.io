import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Sec1(props) {
  const [text, setText] = useState("");

  const hoc = (eve) => {
    setText(eve.target.value);
  };
  const uptxt = () => {
    if (!text) {
      props.show("enter in textbox", "danger");
    } else {
      let t = text.toUpperCase();
      setText(t);
      props.show("conveted to uppercase", "info");
    }
  };
  const lowtxt = () => {
    if (!text) {
      props.show("enter in textbox", "danger");
    } else {
      let t = text.toLowerCase();
      setText(t);
      props.show("conveted to lowercase", "info");
    }
  };
  const cletxt = () => {
    if (!text) {
      props.show("enter in textbox", "danger");
    } else {
      setText("");
      props.show("clear the text", "info");
    }
  };
  const cpytxt = () => {
    if (!text) {
      props.show("enter in textbox", "danger");
    } else {
      navigator.clipboard.writeText(text);
      props.show("copy text", "info");
    }
  };
  const sndtxt = () => {
    if (!text) {
      props.show("enter in textbox", "danger");
    } else {
      let s = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(s);
    }
  };
  const clstxt = () => {
    if (!text) {
      props.show("enter in textbox", "danger");
    } else {
      let t = text.split(/[  ]+/);
      setText(t.join(" "));
      props.show("clear the spaces", "info");
    }
  };

  return (
    <>


      <div className={`container my-4 `}>
        <textarea
          className={`form-control bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          } `}
          onChange={hoc}
          value={text}
          placeholder="Enter text or copy-text here"
          id="box"
          rows="8"
        ></textarea>

        <div className="text-center">
          <button
            type="button"
            onClick={uptxt}
            className="btn btn-primary mx-1 my-3"
          >
            UpperCase
          </button>
          <button
            type="button"
            onClick={lowtxt}
            className="btn btn-secondary mx-1 my-3"
          >
            LowerCase
          </button>
          <button
            type="button"
            onClick={cletxt}
            className="btn btn-warning mx-1 my-3"
          >
            ClearText
          </button>
          <button
            type="button"
            onClick={cpytxt}
            className="btn btn-primary mx-1 my-3"
          >
            CopyText
          </button>
          <button
            type="button"
            onClick={sndtxt}
            className="btn btn-secondary mx-1 my-3"
          >
            Sound
          </button>
          <button
            type="button"
            onClick={clstxt}
            className="btn btn-warning mx-1 my-3"
          >
            ClearSpaces
          </button>
        </div>

        <h2 className="my-4">Text Preview - </h2>
        <p className="mx-3">
          {" "}
          {text.split(" ").length - 1} words and {text.length} charcters
        </p>

        <p className="mx-3">
          {" "}
          {0.008 * text.split("").length} avg Reading Time{" "}
        </p>
      </div>
    </>
  );
}
