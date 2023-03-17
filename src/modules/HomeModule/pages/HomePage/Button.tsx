import React from "react";
import "./Button.scss";

export const Button: React.FC = () => {
  return (
    <div className="generator-box-button">
      <div className="btn-container">
        <button type="button">Copy Password</button>
      </div>
    </div>
  );
};
