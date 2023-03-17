import React, { useEffect, useState } from "react";
import "./Password.scss";
import refreshIcon from "../../../../assets/images/icon/refresh.png";
type PasswordProps = {
  range: number;
  check: any;
  onClick: (password: string) => void;
};

export const Password: React.FC<PasswordProps> = ({
  range,
  check,
  onClick,
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value) handlePassword();
  });

  const handlePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numers = "1234567890";
    const symbols = "!@#$%^&*?";

    let all = "";
    if (check.uppercase) all += uppercase;
    if (check.lowercase) all += lowercase;
    if (check.numers) all += numers;
    if (check.symbols) all += symbols;
    generatePassword(all);
  };
  const generatePassword = (all: string) => {
    const result = [];
    const lenght = range;

    for (let i = 0; i < lenght; i++) {
      result.push(all.charAt(Math.floor(Math.random() * all.length)));
    }
    const join = result.join("");
    const convertedArray = join.toString();

    onClick(convertedArray);
    setValue(convertedArray);
  };

  return (
    <div className="generator-box-copyboard">
      <div className="input-container">
        <input type="text" value={value} />
        <button type="button" onClick={() => handlePassword()}>
          <img src={refreshIcon} alt="refresh password" />
        </button>
      </div>
    </div>
  );
};
