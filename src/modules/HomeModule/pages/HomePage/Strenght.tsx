import React from "react";
import "./Strenght.scss";

export const Strenght: React.FC = () => {
  return (
    <div className="generator-box-strenght">
      <div className="generator-box-strenght-title">
        <div className="box-title">
          <h3>Strenght</h3>
        </div>
        <div className="box-info">
          <p>Low password strength</p>
        </div>
      </div>
      <div className="generator-box-strenght-progress">
        <div className="progress-box active"></div>
        <div className="progress-box"></div>
        <div className="progress-box"></div>
        <div className="progress-box"></div>
      </div>
    </div>
  );
};
