import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
    
      <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            {" "}
            Word Editor{" "}
          </h3>
         

          <div
            className={`form-check form-switch mx-4 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              onClick={props.dmode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="box">
              {" "}
              {props.btntxt}{" "}
            </label>
          </div>

        </div>
      </nav>

     
    </>
  );
}
