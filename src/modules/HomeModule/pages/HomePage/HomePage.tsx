import React from "react";
import "./HomePage.scss";

export const HomePage: React.FC = () => {
  return (
    <>
      <section>
        <div className="generator-box">
          <div className="generator-box-title">
            <h2>Password Generator</h2>
          </div>
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
          <div className="generator-box-strenght"></div>
          <div className="generator-box-copyboard"></div>
        </div>
      </section>
    </>
  );
};
