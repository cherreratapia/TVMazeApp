import React from "react";
import ThemeContext from "./ThemeContext";

export default function Theme(props) {
  return (
    <ThemeContext.Provider value={{ color: "#505050" }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
