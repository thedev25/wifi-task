import React from "react";
import "./CustomButton.css";

function CustomButton(props) {
  const { children } = props;
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}

export default CustomButton;
