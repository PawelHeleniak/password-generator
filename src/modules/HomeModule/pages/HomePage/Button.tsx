import React from "react";
import "./Button.scss";
type ButtonProps = {
  password: string;
};
export const Button: React.FC<ButtonProps> = ({ password }) => {
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="generator-box-button">
      <div className="btn-container">
        <button type="button" onClick={copyPassword}>
          Copy Password
        </button>
      </div>
    </div>
  );
};
