import React, { useState } from "react";
import "./HomePage.scss";
import { Options } from "./Options";
import { Strenght } from "./Strenght";
import { Password } from "./Password";
import { Button } from "./Button";

export const HomePage: React.FC = () => {
  const [range, setRange] = useState(0);
  const [check, setCheck] = useState({});

  const getOption = (length: number, options: Array) => {
    if (length != range) setRange(length);
    if (options != check) setCheck(options);
  };

  return (
    <>
      <section>
        <div className="generator-box">
          <div className="generator-box-title">
            <h2>Password Generator</h2>
          </div>
          <Options
            onClick={(data: number, length: Array) => getOption(data, length)}
          />
          <Strenght />
          <Password range={range} check={check} />
          <Button />
        </div>
      </section>
    </>
  );
};
