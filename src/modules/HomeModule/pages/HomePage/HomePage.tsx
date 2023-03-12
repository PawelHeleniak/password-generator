import React from "react";
import "./HomePage.scss";
import { Options } from "./Options";
export const HomePage: React.FC = () => {
  return (
    <>
      <section>
        <div className="generator-box">
          <div className="generator-box-title">
            <h2>Password Generator</h2>
          </div>
          <Options />
          <div className="generator-box-strenght"></div>
          <div className="generator-box-copyboard"></div>
        </div>
      </section>
    </>
  );
};
