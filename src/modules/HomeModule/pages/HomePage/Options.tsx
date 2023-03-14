import React, { useState } from "react";
import "./Options.scss";

export const Options: React.FC = (props) => {
  const [range, setRange] = useState("1");
  const minRange = 4;
  const maxRange = 16;
  const handleChange = (value: string) => {
    setRange(value);
    props.onClick(value);
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
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
      <div className="generator-box-options-checkbox">
        <div className="input-container_checkbox">
          <label>Include Uppercase Letter</label>
          <input type="checkox" />
        </div>
        <div className="input-container_checkbox">
          <label>Include Lowercase Letter</label>
          <input type="checkox" />
        </div>
        <div className="input-container_checkbox">
          <label>Include Numers</label>
          <input type="checkox" />
        </div>
        <div className="input-container_checkbox">
          <label>Include Symbols</label>
          <input type="checkox" />
        </div>
      </div>
    </div>
  );
};
