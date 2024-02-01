import React from "react";
import "../../assets/scss/validation.css";

function Validation() {
  return (
    <div className="checkmark">
      <svg
        className="checkmark checkmark-success"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        <circle
          className="checkmark-circle"
          cx="25"
          cy="25"
          r="25"
          fill="none"
        />
        <path
          className="checkmark-check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  );
}

export default Validation;
