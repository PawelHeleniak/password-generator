import React, { useEffect, useState } from "react";
import "./Password.scss";

export const Password: React.FC = ({ option }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value) handlePassword();
  });
  const handlePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*?";
    const result = [];
    const lenght = option;

    const all = uppercase + lowercase + numbers + symbols;
    for (let i = 0; i < lenght; i++) {
      result.push(all.charAt(Math.floor(Math.random() * all.length)));
    }
    const join = result.join("");
    const convertedArray = join.toString();

    setValue(convertedArray);
  };

  return (
    <div className="generator-box-copyboard">
      <div className="input-container">
        <input type="text" value={value} />
      </div>
      <button type="button" onClick={() => handlePassword()}>
        Hi
      </button>
    </div>
  );
};
