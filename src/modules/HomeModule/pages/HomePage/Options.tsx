import React, { useState, useEffect } from "react";
import "./Options.scss";

type OptionsProps = { onClick: (length: number, options) => void };
interface CheckState {
  uppercase: boolean;
  lowercase: boolean;
  numers: boolean;
  symbols: boolean;
}

export const Options: React.FC<OptionsProps> = ({ onClick }) => {
  const [range, setRange] = useState(6);
  const minRange = 4;
  const maxRange = 16;

  const [check, setCheck] = useState<CheckState>({
    uppercase: true,
    lowercase: false,
    numers: true,
    symbols: true,
  });

  const handleChange = (value: number) => {
    setRange(value);
    onClick(value, check);
  };
  useEffect(() => {
    onClick(range, check);
  });
  const handleCheck = (e: any) => {
    const checked = e.target.checked;
    const name = e.target.name;

    const objCheck = Object.entries(check);
    const returnValue = objCheck.filter((element, key) => {
      return element[1] === true;
    });
    //FIX
    setCheck({ ...check, [name]: checked });
  };
  return (
    <div className="generator-box-options">
      <div className="generator-box-options-bar">
        <div className="characters">
          <h3>Character Lengh</h3>
          <h2>{range}</h2>
        </div>

        <div className="bar">
          <input
            type="range"
            min={minRange}
            max={maxRange}
            value={range}
            onChange={(e) => handleChange(+e.target.value)}
          />
          <div
            className="bar-progress"
            style={{
              width: `${((range - minRange) / (maxRange - minRange)) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="generator-box-options-checkbox">
        <div className="input-container_checkbox">
          <label>Include Uppercase Letter</label>
          <input
            type="checkbox"
            name="uppercase"
            checked={check.uppercase}
            onChange={(e) => handleCheck(e)}
          />
        </div>
        <div className="input-container_checkbox">
          <label>Include Lowercase Letter</label>
          <input
            type="checkbox"
            name="lowercase"
            checked={check.lowercase}
            onChange={(e) => handleCheck(e)}
          />
        </div>
        <div className="input-container_checkbox">
          <label>Include Numers</label>
          <input
            type="checkbox"
            name="numers"
            checked={check.numers}
            onChange={(e) => handleCheck(e)}
          />
        </div>
        <div className="input-container_checkbox">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            name="symbols"
            checked={check.symbols}
            onChange={(e) => handleCheck(e)}
          />
        </div>
      </div>
    </div>
  );
};
