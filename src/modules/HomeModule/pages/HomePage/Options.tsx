import React from "react";
import "./Options.scss";

export const Options: React.FC = () => {
  return (
    <div className="generator-box-options">
      <div className="generator-box-options-bar">
        <div className="characters">
          <h2>Character Lengh</h2>
          <h3>6</h3>
        </div>
        <div className="bar">
          <div className="bar-lengh"></div>
          <div className="bar-circle">
            <div className="bar-circle-inside"></div>
          </div>
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
