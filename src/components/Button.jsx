import React from "react";

const Button = ({ children, handleToggle, type = "" }) => {
  return (
    <div>
      <button onClick={handleToggle} className={`button ${type}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
