import React from "react";
import { BsMoon } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

const Header = (props) => {
  return (
    <header>
      <div className="wrapper flex">
        <h1>Where in the world?</h1>
        <button onClick={props.changeColor}>
          {props.darkMode ? <BsMoon /> : <BiMoon />} Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
