import React from "react";
import "./HomePage.scss";
import { Options } from "./Options";
import { Strenght } from "./Strenght";
import { Password } from "./Password";
import { Button } from "./Button";

export const HomePage: React.FC = () => {
  return (
    <>
      <section>
        <div className="generator-box">
          <div className="generator-box-title">
            <h2>Password Generator</h2>
          </div>
          <Options />
          <Strenght />
          <Password />
          <Button />
        </div>
      </section>
    </>
  );
};
