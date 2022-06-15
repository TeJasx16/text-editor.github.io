import React, { useState } from "react";

export default function Txtgen(props) {
  // usestate for css
  //   const [mystl, setMystl] = useState({
  //     color: "black",
  //     background: "white",
  //   });
  //   const [btntxt, setBtntxt] = useState("Dark"); //state use multipl time ex for btn also change inner text using setBtntxt (state)
  //   const drkm = () => {
  //       if (mystl.color === "black") {
  //           //dark mode type change css using state
  //       setMystl({
  //         color: "white",
  //         background: "black",
  //       });
  //       setBtntxt("White");
  //     } else {
  //       setMystl({
  //         color: "black",
  //         background: "white",
  //       });
  //       setBtntxt("Dark");
  //     }
  //   };

  //  handle on change for input text,edit in text-area
  const hoc = (event) => {
    setText(event.target.value);
  };
  const upcase = () => {
    if (!text) {
      props.show("enter in textarea", "danger");
    } else {
      let up = text.toUpperCase();
      setText(up);
      props.show("convet to uppercase", "success");
    }
  };
  const lowcase = () => {
    if (!text) {
      props.show("enter in textarea", "danger");
    } else {
      let low = text.toLowerCase();
      setText(low);
      props.show("convet to lowercase", "success");
    }
  };
  const clr = () => {
    if (!text) return;

    setText("");
    props.show("clear ", "success");
  };
  const copy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    props.show("copy the text", "success");
  };
  const spk = () => {
    if (!text) {
      props.show("enter in textarea", "danger");
    } else {
      let snd = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(snd);
    }
  };

  const spce = () => {
    if (!text) return;
    let spac = text.split(/[  ]+/);
    setText(spac.join(" "));
    props.show("delete the space", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>Edit Text </h1>
        <div className="form-group">
          <textarea
            className="form-control"
            onChange={hoc}
            value={text}
            placeholder="enter text or copy text"
            id="box"
            rows="5"
          ></textarea>
        </div>

        <button onClick={upcase} className="btn btn-primary my-3">
          {" "}
          {props.btn1}{" "}
        </button>
        <button onClick={lowcase} className="btn btn-dark mx-2">
          {" "}
          {props.btn2}{" "}
        </button>
        <button onClick={clr} className="btn btn-danger">
          {" "}
          {props.btn3}{" "}
        </button>
        <button onClick={copy} className="btn btn-primary mx-2">
          {" "}
          {props.btn4}{" "}
        </button>
        <button onClick={spk} className="btn btn-dark ">
          {" "}
          {props.btn5}{" "}
        </button>
        <button onClick={spce} className="btn btn-danger mx-2 ">
          {" "}
          {props.btn6}{" "}
        </button>

        <div className="container my-3 mx-2">
          <h2>Text Summary</h2>
          <p>
            {text.split(" ").length - 1} words and {text.length} charcters
          </p>

          <p>{0.008 * text.split("").length} reading time</p>
        </div>
      </div>
    </>
  );
}
