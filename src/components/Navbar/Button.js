import React, { useState } from "react";
import "./Button.css";

const Button = () => {
  const [number, setNumber] = useState(1);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <div className="box">
      <button className="button" onClick={handleClick}>
        <span className="number">{number}</span>
      </button>
    </div>
  );
};

export default Button;