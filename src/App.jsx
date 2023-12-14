import React, { useState } from "react";
import Disp from "./Disp.jsx";
import './App.css';

export default function App() {
  const [result, setResult] = useState("");

  const clickHandler = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "Clear") {
      setResult("");
    } 
    else if(value === "->"){
      setResult(result.slice(0,-1))
    }
    else {
      setResult(result.concat(value));
    }
  };

  return (
    <>
      <Disp result={result} clickHandler={clickHandler} />
    </>
  );
}
