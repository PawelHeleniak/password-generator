import React, { useState } from "react";
import "./HomePage.scss";
import { Options } from "./Options";
import { Strenght } from "./Strenght";
import { Password } from "./Password";
import { Button } from "./Button";

export const HomePage: React.FC = () => {
  const [range, setRange] = useState(0);
  const [check, setCheck] = useState({});

  const [password, setPassword] = useState("");

  const getOption = (length: number, options: any) => {
    if (length != range) setRange(length);
    if (options != check) setCheck(options);
  };

  const getPassword = (password: string) => {
    setPassword(password);
  };
  return (
    <>
      <section>
        <div className="generator-box">
          <div className="generator-box-title">
            <h2>Password Generator</h2>
          </div>
          <Options
            onClick={(length: number, options) => getOption(length, options)}
          />
          <Strenght />
          <Password
            range={range}
            check={check}
            onClick={(password: string) => getPassword(password)}
          />
          <Button password={password} />
        </div>
      </section>
    </>
  );
};
