import React from 'react';
import './App.css';

export default function Disp({ result, clickHandler }) {
  return (
    <div className="cal">
      <div>
        <input type="text" placeholder="0" value={result} readOnly />
      </div>

      <div className="buttons-container">
        {["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "(", ")", ".", "+", "-", "*", "/", "Clear", "->", "="].map((buttonValue) => (
          <button key={buttonValue} onClick={() => clickHandler(buttonValue)}>
            {buttonValue}
          </button>
        ))}
      </div>
    </div>
  );
}