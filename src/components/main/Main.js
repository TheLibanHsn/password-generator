import React, { useState } from "react";
import { FaSyncAlt, FaCopy } from "react-icons/fa";
import { lowercase, uppercase, numbers, symbols } from "../../Data";

import "./main.scss";

export const Main = () => {
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [rangeValue, setRangeValue] = useState(8);
  const [disableBtn, setDisableBtn] = useState(false);
  const [copySucess, setCopySucess] = useState(false);

  // checks which box is checked and then renders and update the password
  function generatePassword() {
    let chars = "";
    let arr = [];
    if (includeLowercase) {
      arr.push(...lowercase);
    }
    if (includeUppercase) {
      arr.push(...uppercase);
    }
    if (includeNumbers) {
      arr.push(...numbers);
    }
    if (includeSymbols) {
      arr.push(...symbols);
    }

    for (let i = 0; i < rangeValue; i++) {
      let randomNumber = Math.ceil(Math.random() * arr.length - 1);
      chars += arr[randomNumber];
    }

    console.log(chars);
    setPassword(chars);
  }

  return (
    <main className="main">
      {copySucess && <span className="copy-success">Copied</span>}
      <div className="password-field">
        <input value={password} disabled />
        <button
          disabled={
            includeLowercase ||
            includeUppercase ||
            includeNumbers ||
            includeSymbols
              ? false
              : true
          }
          onClick={generatePassword}
        >
          <FaSyncAlt className="regenerate-btn" />
        </button>
        <button
          disabled={password ? false : true}
          onClick={() => {
            navigator.clipboard.writeText(password);
            setCopySucess(true);
            setTimeout(() => {
              setCopySucess(false);
            }, 2000);
          }}
        >
          <FaCopy className="copy-btn" />
        </button>
      </div>
      <div className="range">
        <label>
          Length
          <input
            type="range"
            value={rangeValue}
            min="2"
            max="32"
            onChange={(e) => setRangeValue(e.target.value)}
          />
        </label>
        <span>{rangeValue}</span>
      </div>

      <form>
        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            Lowercase
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            Uppercase
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Symbols
          </label>
        </div>
        <br />
        <button
          type="submit"
          disabled={
            includeLowercase ||
            includeUppercase ||
            includeNumbers ||
            includeSymbols
              ? false
              : true
          }
          onClick={(e) => {
            e.preventDefault();
            generatePassword();
          }}
        >
          GENERATE
        </button>
      </form>
    </main>
  );
};
