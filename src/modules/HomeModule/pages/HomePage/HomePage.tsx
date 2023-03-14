import React, { useState } from "react";
import "./HomePage.scss";
import { Options } from "./Options";
import { Strenght } from "./Strenght";
import { Password } from "./Password";
import { Button } from "./Button";

export const HomePage: React.FC = () => {
  const [option, setOption] = useState();
  const getData = (data: string) => {
    setOption(data);
  };
  return (
    <>
      <section>
        <div className="generator-box">
          <div className="generator-box-title">
            <h2>Password Generator</h2>
          </div>
          <Options onClick={(data: string) => getData(data)} />
          <Strenght />
          <Password option={option} />
          <Button />
        </div>
      </section>
    </>
  );
};
